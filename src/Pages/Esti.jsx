import React from "react";

function TrCgpa(props){
  return(
    <tr>
        
              <th class=" border-green-600 ...">{props.question}</th>
              <th class="  rounded-full py-3 px-6...">
              <input style={{color: "black"}} type="number" defaultValue="0" step="0.01" ref={props.gpa} />
              </th>
      </tr> 
  );
}

class CgpaCalculator extends React.Component{
  constructor(props){
    super(props);

    this.gpa1 = React.createRef();
    this.gpa2 = React.createRef();
    this.gpa3 = React.createRef();
    this.gpa4 = React.createRef();
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) =>{
    var goal = parseFloat(this.gpa1.current.value)
    var curr_cgpa = parseFloat(this.gpa2.current.value)
    var completed_creds = parseInt(this.gpa3.current.value)
    var taken_creds = parseInt(this.gpa4.current.value)
    var total = (completed_creds + taken_creds )
    var past=(curr_cgpa*completed_creds)
    var result = (((goal)*(total))-(past))/(taken_creds);

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
              <th class=" border-green-600 ...">Questions</th>
              
              <th class=" border-green-600 ...">Your Answers</th>
            </tr>
          </thead>
          <tbody>
            <TrCgpa question='Do you Wanna be a _?_ Pointer ?'  gpa={this.gpa1}  />
            <TrCgpa question='Current CGPA'  gpa={this.gpa2}  />
            <TrCgpa question='Total no of Credits Completed' gpa={this.gpa3}  />
            <TrCgpa question='No of Credits taken now'  gpa={this.gpa4}  />
                        
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
