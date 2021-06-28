import React from "react";

import NumericInput from "react-numeric-input";

function Esti() {
  return (
    <div className="mx-10">
      <table class="border-separate border ... h-full ... w-full ... shadow-sm">
        <thead>
          <tr>
            <th class=" border-green-600 ...">
              Answer The Following Questions
            </th>

            <th class=" border-green-600 ...">Enter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class=" border-green-600 ...">
              Do you Wanna be a _?_ Pointer ?
            </th>
            <th class="  rounded-full py-3 px-6...">
              <NumericInput
                style={{
                  wrap: {
                    background: "#E2E2E2",
                    boxShadow: "0 0 1px 1px #fff inset, 1px 1px 5px -1px #000",
                    padding: "2px 2.26ex 2px 2px",
                    borderRadius: "10px 10px 10px 10px",
                  },
                  input: {
                    color: "black",
                  },
                }}
                min={0}
                max={100}
                value={"Answer"}
              />
            </th>
          </tr>
          <tr>
            <th class=" border-green-600 ...">Current CGPA</th>
            <th class="  rounded-full py-3 px-6...">
              <NumericInput
                style={{
                  wrap: {
                    background: "#E2E2E2",
                    boxShadow: "0 0 1px 1px #fff inset, 1px 1px 5px -1px #000",
                    padding: "2px 2.26ex 2px 2px",
                    borderRadius: "10px 10px 10px 10px",
                  },
                  input: {
                    color: "black",
                  },
                }}
                min={0}
                max={100}
                value={"Answer"}
              />
            </th>
          </tr>
          <tr>
            <th class=" border-green-600 ...">Total no of Credits Completed</th>
            <th class="  rounded-full py-3 px-6...">
              <NumericInput
                style={{
                  wrap: {
                    background: "#E2E2E2",
                    boxShadow: "0 0 1px 1px #fff inset, 1px 1px 5px -1px #000",
                    padding: "2px 2.26ex 2px 2px",
                    borderRadius: "10px 10px 10px 10px",
                  },
                  input: {
                    color: "black",
                  },
                }}
                min={0}
                max={100}
                value={"Answer"}
              />
            </th>
          </tr>
          <tr>
            <th class=" border-green-600 ...">No of Credits taken now</th>
            <th class="  rounded-full py-3 px-6...">
              <NumericInput
                style={{
                  wrap: {
                    background: "#E2E2E2",
                    boxShadow: "0 0 1px 1px #fff inset, 1px 1px 5px -1px #000",
                    padding: "2px 2.26ex 2px 2px",
                    borderRadius: "10px 10px 10px 10px",
                  },
                  input: {
                    color: "black",
                  },
                }}
                min={0}
                max={100}
                value={"Answer"}
              />
            </th>
            <th>
              <button
                style={{
                  background: "#b2b9a3",
                  color: "white",
                  borderRadius: "10px",
                  width: "100px",
                  height: "50px",
                }}
              >
                Estimate
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Esti;
