import React from "react";
import Faq from "../Components/Faq";
import Man from "../images/man-on-book.svg";

function LandingPage() {
  return (
    <>
    <section className="grid grid-cols-2 h-auto items-center mx-24">
      <div className="col-span-2 sm:col-span-1 ">
        <p className="text-sm sm:text-6xl mt-44">
          A Fresh Take on Ranking System with evaluation of GPA , CGPA and
          Estimate your CGPA for further improvement
        </p>
      </div>
      <div className="sm:col-span-1 col-span-2 flex justify-end">
      <img src={Man} alt="Man" className="z-0"/>
        
      </div>
    </section>
    <section className="mt-24">
      <Faq/>
    </section>
    </>
  );
}

export default LandingPage;
