import React from "react";
import ReactDOM from "react-dom";
import Logo from "../images/graduation.png";


function Navbar() {
  return (
    <div className="mx-8 text-2xl h-14">
      
      <img src={Logo} alt="logo" className="h-16 w-16 inline-block"></img>
      <p className="text-white inline-block"> Rank Vitians</p>
      <div className="float-right ">
        <a href="" className="px-4 text-white">
          GPA Calculator
        </a>
        <a href="" className="px-4 text-white">
          CGPA Calculator
        </a>
        <a href="" className="px-4 text-white">
          GPA Estimation
        </a>
        <a href="" className="px-4 text-white">
          Rank
        </a>
      </div>
    </div>
  );
}

export default Navbar;
