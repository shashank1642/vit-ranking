import React from "react";

import Man from "../images/man-on-book.svg";

function LandingPage() {
  return (
    <section className="grid grid-cols-2">
      <div className="col-span-1">
        <div className="mx-8 ml-56 mt-4 h-96 grid grid-flow-col">
          <div className="w-4/5">
            <p className="text-6xl text-center mt-60">
              A Fresh Take on Ranking System with evaluation of GPA , CGPA and
              Estimate your CGPA for further improvement
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="mr-28 mt-12">
          <img src={Man} alt="Man" className="z-0"></img>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
