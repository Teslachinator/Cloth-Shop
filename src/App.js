import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Pages/Main/Main";
import MainSweaters from "./Pages/Main/MainSweaters";

function App() {
  return (
    // <Router>
    <div className="App">
      <Header />
      {/* <MainSweaters /> */}
      {/* <Route path="/"> */}
      <Main />
      {/* </Route> */}

      <Footer />
    </div>
    // </Router>
  );
}

export default App;
