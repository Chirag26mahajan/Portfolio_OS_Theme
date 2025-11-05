import { Icon, MessageBar, MessageBarType, TextField } from "@fluentui/react";
import React, { useEffect, useState } from "react";
import "./application.scss";
import firebase from "../../utils/firebaseConfig";
import { ANALYTICS_EVENTS } from "../../utils/documents/enums";
import projectAnalytics from "../../utils/data/project.config";
import emailjs from "@emailjs/browser";

function Mail() {

	useEffect(() => {
		emailjs.init(process.env.REACT_APP_EMAILJS_KEY);
	}, []);

	const [emailResponse, setEmailResponse] = useState({
		template: {
			from: "",
			subject: "",
			message: "",
			response: "",
		},
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setEmailResponse((prev) => ({
			template: { ...prev.template, [name]: value },
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const serviceId = process.env.REACT_APP_EMAILJS_SERVICE;
		const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE;

		let templateParams = {
			message: emailResponse.template.message,
			subject: emailResponse.template.subject,
			from: emailResponse.template.from,
		};

		if (projectAnalytics.enableAnalytics) {
			firebase.analytics().logEvent(ANALYTICS_EVENTS.SEND_MAIL, { template: templateParams });
		}

		sendFeedback(serviceId, templateId, templateParams);
	};

	const sendFeedback = (serviceId, templateId, variables) => {
		emailjs
			.send(serviceId, templateId, variables)
			.then(() => {
				setEmailResponse({
					template: {
						from: "",
						subject: "",
						message: "",
						response: (
							<MessageBar messageBarType={MessageBarType.success} isMultiline>
								Message sent successfully ✅
							</MessageBar>
						),
					},
				});
			})
			.catch((err) => {
				console.error("Email sending failed:", err);
				setEmailResponse((prev) => ({
					template: {
						...prev.template,
						response: (
							<MessageBar messageBarType={MessageBarType.error} isMultiline>
								Sorry! Couldn't send the message 😕 Try again later.
							</MessageBar>
						),
					},
				}));
			});
	};

	return (
		<div className="height-100">
			<form onSubmit={handleSubmit}>
				<div className="uk-margin form-input uk-flex  uk-flex-right">
					<button className="discard-button uk-button uk-margin-small-right uk-background-secondary font-color-white">
						<Icon iconName="Delete" /> Discard
					</button>
					<button className="uk-button uk-button-primary" type="submit">
						<Icon iconName="Send" /> Send
					</button>
				</div>

				{emailResponse.template.response}

				<div className="uk-margin form-input">
					<TextField
						label="From :"
						name="from"
						underlined
						required
						placeholder="Your Email / Name"
						value={emailResponse.template.from}
						onChange={handleChange}
					/>
				</div>

				<div className="uk-margin form-input">
					<TextField
						label="To :"
						underlined
						disabled
						placeholder="Chirag Gupta (chiragmahajan26.cm@gmail.com)"
					/>
				</div>

				<div className="uk-margin form-input">
					<TextField
						label="Subject :"
						underlined
						name="subject"
						required
						placeholder="Here goes the subject"
						value={emailResponse.template.subject}
						onChange={handleChange}
					/>
				</div>

				<div className="uk-margin form-input message-box">
					<TextField
						multiline
						autoAdjustHeight
						placeholder="Write your message / feedback here."
						name="message"
						rows={10}
						value={emailResponse.template.message}
						onChange={handleChange}
					/>
				</div>
			</form>
		</div>
	);
}

export default Mail;
