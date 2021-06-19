import React from "react";

import Logo from "../images/graduation.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import cgpaCal from '../Pages/cgpaCalculator';




function Navbar() {
  return (
    <Router>
    <div className="fixed Color flex w-full  mx-8 text-2xl h-14 top-0 z-50">

      <img src={Logo} alt="logo" className="h-16 mt-2 w-16 inline-block float-left"></img>
      <p className="flex relative top-4"> Rank Vitians</p>

        <div className=" absolute top-4 right-16 ">
          <Link to="/gpaCal" className="px-4">
            GPA Calculator
          </Link>
          <Link to="/cgpaCal" className="px-4">
            CGPA Calculator
          </Link>
          <Link to="/gpaEst" className="px-4">
            GPA Estimation
          </Link>
          <Link to="/Rank" className="px-4">
            Rank
          </Link>
        </div>
    </div>
    <Switch>

      <Route exact path='/cgpaCal' component={cgpaCal}></Route>
    </Switch>
    </Router>
  );
}

export default Navbar;
