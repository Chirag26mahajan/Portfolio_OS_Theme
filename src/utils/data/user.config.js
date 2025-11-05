import ResumePDF from "./Chirag_Gupta_Resume.pdf";
import Chirag from "../../assets/images/data/Chirag.jpeg";
import SpringWorks from ".././../assets/images/data/Springworks.png";
import Diagnosis from ".././../assets/images/data/Diagnosis.png";

const user = {
	firstName: "Chirag",
	lastName: "Gupta",
	userImage: Chirag,
	resume: ResumePDF,
	email: "chiragmahajan26.cm@gmail.com",
	linkedIn: "chiraggupta26",
	gitHub: "Chirag26mahajan",
	twitter: "Chirag26mahajan",
	aboutMe: {
		intro: " ",
		description:
			"I enjoy solving real-world problems and turning ideas into intuitive digital experiences. My core focus areas are Web Development (HTML, CSS, JavaScript, React) and Software Development with Java, along with a foundational understanding of databases such as MySQL.",
		outro: "If I’m not coding, I’m probably discovering new places, hitting the mountain trails, or enjoying a nice coffee break",
	},
	experiences: [
		{
			organization: "SpringWorks",
			organizationPicture:SpringWorks,
			isCurrent: true,
			startDate: "Sep 2024",
			endDate: null,
			positions: [
				{
					positionName: "Operations Intern",
					startDate: "Sep 2024",
					endDate: " Jun 2025",
					isPresent: true,
					description: "Served as the primary liaison between clients and internal product/tech teams, ensuring seamless delivery of background-verification solutions. Managed client escalations, SLAs, and workflow performance while driving operational efficiency improvements. Collaborated with engineering teams by reporting system bugs, analyzing process bottlenecks, and recommending product enhancements.Interpreted case data & operational logs to identify trends, reduce verification turnaround time, and improve platform accuracy. Utilized internal enterprise tools (SpringVerify Platform, Exotel, Apollo, Trello, Google Workspace) for workflow automation, documentation, and quality control.",

				},
			],
		},
		{
			organization: "eDiagnosis",
			startDate: "Oct 2023",
			endDate: " Nov 2023",
			organizationPicture: Diagnosis,
			isCurrent: false,
			positions: [
				{
					positionName: "Freelance UI/UX & Frontend Developer",
					startDate: "Oct 2023",
					endDate: "Nov 2023",
					isPresent: false,
					description:
						"Designed a modern, user-centric healthcare web interface using Figma, focusing on clean visuals, intuitive navigation, and accessibility. Developed key frontend components in React (cards, search UI, and interaction sections), ensuring responsiveness and smooth user experience. Collaborated directly with the client to refine product requirements and translate business needs into functional UI workflows.",
				},
			],
		},
	],
	education: [
		{
			instituteName:
				"Chitkara University",
			degree: "Bachelor's Degree in Computer Science and Engineering - CGPA -8.81",
			year: "2025",
			id: 1,
		},
		{
			instituteName: "DAV Public SChool",
			degree: "Senior Secondary - 90%",
			year: "2019",
			id: 2,
		},
		{
			instituteName: "DAV Public School",
			degree: "Secondary - 80%",
			year: "2017",
			id: 3,
		},
	],
	projects: [
		{
			projectName: "Escape The Ordinary",
			description:
				"Rental website designed to cater to adventurers and travelers seeking unique experiences. Offering an extensive array of rental services including gears, bikes, cars, and hotels, Escape the Ordinary aims to transform ordinary journeys into extraordinary adventures.",
			madeWith: ["HTML", "CSS", "JS", "Bootstrap"],
			link: "https://gentle-tulumba-4a9530.netlify.app/",
		},
		{
			projectName:"Java-Car-Rental-System",
			description:
			      "Java-based Car Rental System: Rent & return cars via console.",
			madeWith:["Java"],
			link:"https://github.com/Chirag26mahajan/Java-Car-Rental-System",
		},

		{
			projectName:"Netflix-Clone",
			description:
			   "A Netflix clone built using JavaScript, HTML, and CSS. This project replicates the core functionality and design of the popular streaming platform, featuring a user-friendly interface for browsing and watching movies and TV shows",
		    madeWith:["HTML","CSS","JavaScript","Bootstrap"],
			link:"https://netlfix-clone.netlify.app/",
			},
		{
			projectName:"CodePaint",
			description:
			   "front-end code visualization tool that converts code snippets into interactive live previews, enabling users to save and share projects, resulting in 30% faster debugging and feedback cycles",
			   madeWith:["ReactJs","NodeJs","Express","MongoDB","Redux Toolkit","TypeScript"],
			link:"https://livecodepaint.netlify.app/",
		},

		{
			projectName:"SimplyFin",
			description:
			     "Built a smart finance platform with real time updates, smart filter, and analytics dashboards, tracking thousands of transactions with monthly and category wise insights for data driven  financial decisions",
			madeWith:["NextJs","Firebase","Tailwind CSS","Framer Motion"],
			link:"https://simplyfin.netlify.app/",
		}

	],
	skills: [
		{
			name: "Language Proficiency",
			values: [
				"Java",
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				
			],
		},
		{
			name: "Tools/IDE Proficiency",
			values: ["VSCode","Git", "IntelliJ IDEA","Figma"],
		},
		{
			name: "Database Proficiency",
			values: ["MySQL", "Firebase"],
		},
	],
};

export default user;
