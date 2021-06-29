import React from "react";
import {Link} from "react-router-dom";
import Logo from "../images/graduation.png";

function Navbar() {
  return (
      <nav className="grid grid-cols-2 h-20">
        <div className="col-span-1">
          <Link to='/'>
          <img src={Logo} alt="logo" className="h-16 mt-2 w-16 inline-block float-left"/>
          <p className="relative top-7 mx-2 Roboto font-bold text-2xl inline text-left"> Rank Vitians</p>
          </Link>
        </div>

        <div className="lg:hidden block top-6 right-0 ">
        <button class="inline-block right-12 absolute px-3 mt-8 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
        </div>

        <div id="navbox" className="col-span-1 invisible lg:visible ">
          <div className=" absolute top-6 right-16 ">
            <Link to="/gpaCal" className="px-4 Poppins text-2xl">
              Gpa Calculator
            </Link>
            <Link to="/cgpaCal" className="px-4 Poppins text-2xl">
              Cgpa Calculator
            </Link>
            <Link to="/gpaEst" className="px-4 Poppins text-2xl">
              Cgpa Estimation
            </Link>
            <Link to="/Rank" className="px-4 Poppins text-2xl">
              Rank
            </Link>
          </div>
        </div>
      </nav>

  );
}

export default Navbar;
