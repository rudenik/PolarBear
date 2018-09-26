import React, { Component } from 'react'
import "./Event.css"
import { InputText, InputArea } from "../../components/event__form";
import { Row, Col, Container } from "../../components/Grid";
import {Button, Dropdown, NavItem} from 'react-materialize'

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
       <div>
        <p>Hi {this.state.name}!</p> 
         <InputArea className="event__code" label="Event Code Name" textAreaID="eventCode" onChange={this.handleInputChange}/>
       </div>
        
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