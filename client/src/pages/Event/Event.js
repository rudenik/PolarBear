import React, { Component } from 'react'
import "./Event.css"
import API from "../../utils/API"
import { InputText, InputArea } from "../../components/event__form";
import { Row, Col, Container } from "../../components/Grid";


class Event extends Component {

    state = {
        name: "Johnny",
        eventCode: "",
        choice:""
    };

    EnterEventCode = () => {
    API.addUserEvents()
    .then(res =>{}
      //SET STATE HERE) {eventCode , id}
    
    ).catch(err => console.log(err));
  };


     render() {       
   return (
     <div className="Event">
     <Container>
      
        <p>Hi {this.state.name}!</p> 
         <InputArea className="event__code" label="Event Code Name" textAreaID="eventCode" onChange={this.handleInputChange}/>
       
        
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