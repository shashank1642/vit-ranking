import React from "react";

function TrGpa(props) {
  return (
    <tr>
      <th class="  rounded-full py-3 px-6...">
        <input
          type="number"
          style={{ color: "black" }}
          defaultValue="0"
          ref={props.val}
        />
      </th>
      <th class=" border-green-600 ...">Course-{props.sem}</th>
      <th class="  rounded-full py-3 px-6...">
        <input
          style={{ color: "black" }}
          type="alphabet"
          defaultValue=""
          ref={props.gpa}
        />
        {/* step="0.01" */}
      </th>
    </tr>
  );
}

function convert(grade) {
  if (grade === "S" || grade === "s") {
    return 10;
  } else if (grade === "A" || grade === "a") {
    return 9;
  } else if (grade === "B" || grade === "b") {
    return 8;
  } else if (grade === "C"|| grade === "c") {
    return 7;
  } else if (grade === "D" || grade === "d") {
    return 6;
  } else if (grade === "E" || grade === "e") {
    return 5;
  } else if (grade === "F" || grade === "f") {
    return 4;
  } else {
    return 0;
  }
}

class CgpaCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.val1 = React.createRef();
    this.gpa1 = React.createRef();
    this.val2 = React.createRef();
    this.gpa2 = React.createRef();
    this.val3 = React.createRef();
    this.gpa3 = React.createRef();
    this.val4 = React.createRef();
    this.gpa4 = React.createRef();
    this.val5 = React.createRef();
    this.gpa5 = React.createRef();
    this.val6 = React.createRef();
    this.gpa6 = React.createRef();
    this.val7 = React.createRef();
    this.gpa7 = React.createRef();
    this.val8 = React.createRef();
    this.gpa8 = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // var alphabet = ["S","A","B","C","D","E"];

  handleSubmit = (e) => {
    // if(this.gpa1.current.value==='S'){
    //   this.gpa1.current.value=10;
    // }
    var grade1 = convert(this.gpa1.current.value);
    var grade2 = convert(this.gpa2.current.value);
    var grade3 = convert(this.gpa3.current.value);
    var grade4 = convert(this.gpa4.current.value);
    var grade5 = convert(this.gpa5.current.value);
    var grade6 = convert(this.gpa6.current.value);
    var grade7 = convert(this.gpa7.current.value);
    var grade8 = convert(this.gpa8.current.value);

    // var sem1 = parseInt(this.val1.current.value)*parseFloat(this.gpa1.current.value)
    var sem1 = parseInt(this.val1.current.value) * grade1;
    var sem2 = parseInt(this.val2.current.value) * grade2;
    var sem3 = parseInt(this.val3.current.value) * grade3;
    var sem4 = parseInt(this.val4.current.value) * grade4;
    var sem5 = parseInt(this.val5.current.value) * grade5;
    var sem6 = parseInt(this.val6.current.value) * grade6;
    var sem7 = parseInt(this.val7.current.value) * grade7;
    var sem8 = parseInt(this.val8.current.value) * grade8;
    var total =
      parseInt(this.val1.current.value) +
      parseInt(this.val2.current.value) +
      parseInt(this.val3.current.value) +
      parseInt(this.val4.current.value) +
      parseInt(this.val5.current.value) +
      parseInt(this.val6.current.value) +
      parseInt(this.val7.current.value) +
      parseInt(this.val8.current.value);
    var result =
      (sem1 + sem2 + sem3 + sem4 + sem5 + sem6 + sem7 + sem8) / total;

    alert("compute clicked. " + result.toFixed(2));
    e.preventDefault();
  };

  render() {
    return (
      <div className="mx-10">
        <form onSubmit={this.handleSubmit}>
          <table class="border-separate border ... h-full ... w-full ... shadow-sm">
            <thead>
              <tr>
                <th class=" border-green-600 ...">Enter Your Credit</th>
                <th class=" border-green-600 ...">Course</th>
                <th class=" border-green-600 ...">Grade</th>
              </tr>
            </thead>
            <tbody>
              <TrGpa sem="1" val={this.val1} gpa={this.gpa1} />
              <TrGpa sem="2" val={this.val2} gpa={this.gpa2} />
              <TrGpa sem="3" val={this.val3} gpa={this.gpa3} />
              <TrGpa sem="4" val={this.val4} gpa={this.gpa4} />
              <TrGpa sem="5" val={this.val5} gpa={this.gpa5} />
              <TrGpa sem="6" val={this.val6} gpa={this.gpa6} />
              <TrGpa sem="7" val={this.val7} gpa={this.gpa7} />
              <TrGpa sem="8" val={this.val8} gpa={this.gpa8} />
              <tr>
                <th></th>
                <th>
                  <button
                    type="submit"
                    style={{
                      background: "#b2b9a3",
                      color: "white",
                      borderRadius: "10px",
                      width: "100px",
                      height: "50px",
                    }}
                  >
                    Compute
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default CgpaCalculator;
