import React from "react";

function Footer() {
  return (
    <section className="grid grid-cols-3 pt-10">
      <div className="col-span-1 flex justify-center pt-20">
        <p>Made with ♥ for all VITians.</p>
      </div>
      <div className="col-span-1 flex justify-center">
        <div className="grid grid-rows-2">
          <div className="row-span-1">
            <h1 className="text-3xl">Contact</h1>
          </div>
          <div className="row-span-1">
            <ul>
              <li>Shashank Sinha</li>
              <li>Siddhartha Mareedu</li>
              <li>Akshat Mishra</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-span-1 flex justify-center">
        <div className="grid grid-rows-2">
          <div className="row-span-1">
            <h1 className="text-3xl">Contact</h1>
          </div>
          <div className="row-span-1">
            <ul>
              <li>Shashank Sinha</li>
              <li>Siddhartha Mareedu</li>
              <li>Akshat Mishra</li>
            </ul>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Footer;
