import "./App.css";
import store from "./utils/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./utils/routes";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Chirag Gupta</title>
        <meta name="description" content="Chirag Gupta - Portfolio Website" />
      </Helmet>

      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </>
  );
}

export default App;
