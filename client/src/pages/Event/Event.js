import React, { Component } from 'react'
import "./Event.css"
import { InputText, InputArea } from "../../components/event__form";
import { Row, Col, Container } from "../../components/Grid";
import {Button, Icon, Dropdown, NavItem} from 'react-materialize'

class Event extends Component {

    state = {
        name: "Johnny",
        eventCode: "",
        jobSeeker:""
    };

     render() {
   return (
     <div className="Event">
     <Container>
       <div>
        <p>Hi {this.state.name}!</p> 
         <InputArea label="Event Code Name" textAreaID="eventCode" onChange={this.handleInputChange}/>
       </div>
        <div className="JobSeeker">
          <p>I am a:</p> 
          <Dropdown trigger={
        <Button>Job Seeker Dropdown</Button>
            }>
         <NavItem>Student</NavItem>
         <NavItem>Employer</NavItem>
         <NavItem>Job Seeker</NavItem>
        </Dropdown>
        </div>
         <button type="button" className="waves-effect waves-light btn event__btn" onClick={this.handleSignUpButton}>Sign Up for Event </button> 
      
         </Container>
     </div>
   );
 }

}

export default Event;