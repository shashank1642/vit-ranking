import React from "react";
import Navbar from './Components/Navbar';
import LandingPage from './LandingPage';
import Footer from './Components/Footer';


function Home() {
  return (
    <>
      <div className="Color h-screen">
        <Navbar/>
        <LandingPage/>
        </div>
        <div className="Color h-2/6">
        <Footer/>
      </div>
    </>
  );
}

export default Home;
