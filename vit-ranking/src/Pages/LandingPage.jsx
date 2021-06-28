import React from "react";
import Faq from "../Components/Faq";
import Man from "../images/man-on-book.svg";

function LandingPage() {
  return (
    <>
    <section className="grid grid-cols-2 pt-10">
      <div className="col-span-2 md:col-span-1">
        <p className="text-2xl pt-6 md:text-6xl pt-52">
          A Fresh Take on Ranking System with evaluation of GPA , CGPA and
          Estimate your CGPA for further improvement
        </p>
      </div>
      <div className="col-span-0 md:col-span-1">
      <img src={Man} alt="Man" className="imgsize"/>
        
      </div>
    </section>
    <section className="mt-24">
      <Faq/>
    </section>
    </>
  );
}

export default LandingPage;
