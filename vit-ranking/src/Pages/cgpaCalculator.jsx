import React from "react";
import NumericInput from "react-numeric-input";


function TrCgpa(props){
  return(
    <tr>
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
                    borderRadius: "4px 2px 2px 1000px",
                  },
                }}
                min={0}
                max={100}
                value={props.val}
                onChange={props.och}
              />
              </th>
              <th class=" border-green-600 ...">Semester-{props.sem}</th>
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
                    borderRadius: "4px 2px 2px 1000px",
                  },
                }}
                min={0}
                max={100}
                value={props.gpa}
                onChange={props.och}
              />
              </th>
      </tr>
  );
}

class CgpaCalculator extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    alert('compute clicked. '+this.state.val1);
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
            <TrCgpa sem='1' val={this.state.val1} och={(value) => this.onChange(value)} gpa={this.state.gpa1}  />
            <TrCgpa sem='2' val={this.state.val2} och={(value) => this.onChange(value)} gpa={this.state.gpa2}  />
            <TrCgpa sem='3' val={this.state.val3} och={(value) => this.onChange(value)} gpa={this.state.gpa3}  />
            <TrCgpa sem='4' val={this.state.val4} och={(value) => this.onChange(value)} gpa={this.state.gpa4}  />
            <TrCgpa sem='5' val={this.state.val5} och={(value) => this.onChange(value)} gpa={this.state.gpa5}  />
            <TrCgpa sem='6' val={this.state.val6} och={(value) => this.onChange(value)} gpa={this.state.gpa6}  />
            <TrCgpa sem='7' val={this.state.val7} och={(value) => this.onChange(value)} gpa={this.state.gpa7}  />
            <TrCgpa sem='8' val={this.state.val8} och={(value) => this.onChange(value)} gpa={this.state.gpa8}  />
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
