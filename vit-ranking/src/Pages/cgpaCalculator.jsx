import React from "react";

function TrCgpa(props){
  return(
    <tr>
        <th class="  rounded-full py-3 px-6...">
              <input type="number" style={{color: "black"}}  defaultValue="0" ref={props.val}  />
              </th>
              <th class=" border-green-600 ...">Semester-{props.sem}</th>
              <th class="  rounded-full py-3 px-6...">
              <input style={{color: "black"}} type="number" defaultValue="0" step="0.01" ref={props.gpa} />
              </th>
      </tr>
  );
}

class CgpaCalculator extends React.Component{
  constructor(props){
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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) =>{
    var sem1 = parseInt(this.val1.current.value)*parseFloat(this.gpa1.current.value)
    var sem2 = parseInt(this.val2.current.value)*parseFloat(this.gpa2.current.value)
    var sem3 = parseInt(this.val3.current.value)*parseFloat(this.gpa3.current.value)
    var sem4 = parseInt(this.val4.current.value)*parseFloat(this.gpa4.current.value)
    var sem5 = parseInt(this.val5.current.value)*parseFloat(this.gpa5.current.value)
    var sem6 = parseInt(this.val6.current.value)*parseFloat(this.gpa6.current.value)
    var sem7 = parseInt(this.val7.current.value)*parseFloat(this.gpa7.current.value)
    var sem8 = parseInt(this.val8.current.value)*parseFloat(this.gpa8.current.value)
    var total = (parseInt(this.val1.current.value)+parseInt(this.val2.current.value)+parseInt(this.val3.current.value)+parseInt(this.val4.current.value)+parseInt(this.val5.current.value)+parseInt(this.val6.current.value)+parseInt(this.val7.current.value)+parseInt(this.val8.current.value))
    var result = (sem1+sem2+sem3+sem4+sem5+sem6+sem7+sem8)/(total);

    alert('compute clicked. '+result.toFixed(2));
    e.preventDefault();
  }

  render(){
    return (
      <div className="mx-10">
        <form onSubmit={this.handleSubmit}>
        <table class="border-separate border ... h-full ... w-full ... shadow-sm">
          <thead>
            <tr>
              <th class=" border-green-600 ...">Enter Your Credit Sem-Wise</th>
              <th class=" border-green-600 ...">Semester</th>
              <th class=" border-green-600 ...">Gpa Sem-Wise</th>
            </tr>
          </thead>
          <tbody>
            <TrCgpa sem='1' val={this.val1} gpa={this.gpa1}  />
            <TrCgpa sem='2' val={this.val2} gpa={this.gpa2}  />
            <TrCgpa sem='3' val={this.val3} gpa={this.gpa3}  />
            <TrCgpa sem='4' val={this.val4} gpa={this.gpa4}  />
            <TrCgpa sem='5' val={this.val5} gpa={this.gpa5}  />
            <TrCgpa sem='6' val={this.val6} gpa={this.gpa6}  />
            <TrCgpa sem='7' val={this.val7} gpa={this.gpa7}  />
            <TrCgpa sem='8' val={this.val8} gpa={this.gpa8}  />
            <tr>
              <th></th>
              <th>
                <button
                type='submit'
                style={{
                  background: "#b2b9a3",
                  color: "white",
                  borderRadius: "10px",
                  width: "100px",
                  height: "50px",
                }}
                >
                  Compute
                </button></th>
            </tr>
          </tbody>
        </table>
        </form>
      </div>
    );
  }
}

export default CgpaCalculator;
