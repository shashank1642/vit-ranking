import React from "react";

import Man from "../images/man-on-book.svg";

function LandingPage() {
  return (
    <section className="grid grid-cols-2 h-auto">
      <div className="sm:col-span-2 md:col-span-1 ">
        <p className="text-6xl mt-44">
          A Fresh Take on Ranking System with evaluation of GPA , CGPA and
          Estimate your CGPA for further improvement
        </p>
      </div>
      <div className="sm:col-span-0 md:col-span-1 flex justify-end">
      <img src={Man} alt="Man" className="z-0"/>
        
      </div>
    </section>
  );
}

export default LandingPage;
