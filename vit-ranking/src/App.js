import "./App.css";
import "./index.css";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Components/Footer";
import cgpaCalculator from "./Pages/cgpaCalculator";
import gpaCalculator from "./Pages/gpaCalculator";
import Esti from "./Pages/Esti";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <div className="Color px-10">
        <Navbar />  
      </div>

      <div className="Color px-10">
      <Switch>
        <Route path="/" exact component={LandingPage}></Route>
        <Route path="/cgpaCal" component={cgpaCalculator}></Route>
        <Route path="/gpaCal" component={ gpaCalculator}></Route>
        <Route path="/gpaEst" component={ Esti}></Route>
      </Switch>
      </div>
      
      <div className="Color h-2/6 ">
        <Footer />
      </div>
      </Router>
    </>
  );
}

export default App;
