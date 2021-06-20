import React from "react";

import Logo from "../images/graduation.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import cgpaCal from "../Pages/cgpaCalculator";

function Navbar() {
  return (
    <Router>
      <section className="grid grid-cols-2 h-20">
        <div className="col-span-1">
          <img
            src={Logo}
            alt="logo"
            className="h-16 mt-2 w-16 inline-block float-left"
          />
          <p className="flex relative top-7 mx-24 Roboto font-bold text-2xl"> Rank Vitians</p>
        </div>

        <div className="col-span-1">
          <div className=" absolute top-6 right-16 ">
            <Link to="/gpaCal" className="px-4 Poppins text-2xl">
              GPA Calculator
            </Link>
            <Link to="/cgpaCal" className="px-4 Poppins text-2xl">
              CGPA Calculator
            </Link>
            <Link to="/gpaEst" className="px-4 Poppins text-2xl">
              GPA Estimation
            </Link>
            <Link to="/Rank" className="px-4 Poppins text-2xl">
              Rank
            </Link>
          </div>
        </div>
      </section>

      <Switch>
        <Route exact path="/cgpaCal" component={cgpaCal}></Route>
      </Switch>
    </Router>
  );
}

export default Navbar;
