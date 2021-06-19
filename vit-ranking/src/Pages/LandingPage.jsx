import React from "react";
import ReactDOM from "react-dom";
import Man from "../images/man-on-book.svg";

function LandingPage() {
  return (
    <div className="mx-8 mt-4  h-96 grid grid-flow-col">
      <div className="float-left">
        <p className="text-5xl text-white mt-60">
          A Fresh Take on Ranking System with evaluation of GPA , CGPA and
          Estimate your CGPA for further improvement
        </p>
      </div>
      <div className="float-left">
      <img src={Man} alt="Man" ></img>
      </div>
    </div>
  );
}

export default LandingPage;
