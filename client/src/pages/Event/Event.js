import React, { Component } from 'react'
import "./Event.css"
import { InputText, InputArea } from "../../components/event__form";
import { Row, Col, Container } from "../../components/Grid";


class Event extends Component {

    state = {
        name: "Johnny",
        eventCode: "",
        choice:""
    };


     render() {       
   return (
     <div className="Event">
     <Container>
      
        <p>Hi {this.state.name}!</p> 
<<<<<<< HEAD
        <br/>
       <InputText id="event__code" fieldName="Event Code" inputId="eventCode" matIcon="event" onChange={this.handleInputChange}/>
        <div className="JobSeeker">
          <p className="Event__left" >I am a:</p> 
          <label for="jobStatus" className="visuallyhidden">Job Status</label>
                            <div className="styleSelect">
                            <select name="eventStatus" id="eventStatus" >
                                <option value = "jobSeeker"
                                className="event__align-center">Job Seeker</option>
                                <option value="youraccount__hiringManager">Hiring Manager</option>
                                <option value="youraccount__hiringManager">Student</option>
                                <option value="youraccount__hiringManager">Curious</option>
                            </select> 
                            </div>
        </div>
     
       
=======
         <InputArea className="event__code" label="Event Code Name" textAreaID="eventCode" onChange={this.handleInputChange}/>
       </div>
        
>>>>>>> e0846f564df543e4a6b63940d85d22ac30b54da0
         <button type="button" className="waves-effect waves-light btn event__btn" onClick={this.handleSignUpButton}>Sign Up for Event </button> 
    
         </Container>
     </div>
   );
 }

}

export default Event;

//<div className="JobSeeker">
         // <p>I am a:</p> 
       //   <Dropdown trigger={
     //   <Button>Job Seeker</Button>
         //   }>
       //  <NavItem>Student</NavItem>
       //  <NavItem>Employer</NavItem>
    ///     <NavItem>Job Seeker</NavItem>
  //      </Dropdown>
//        </div>