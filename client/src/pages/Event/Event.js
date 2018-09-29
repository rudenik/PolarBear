import React, { Component } from 'react'
import "./Event.css"
import API from "../../utils/API"
import { InputText, InputArea } from "../../components/event__form";
import { Row, Col, Container } from "../../components/Grid";
import {Button, Dropdown, NavItem} from 'react-materialize';
import { connect } from "react-redux";

class Event extends Component {
  //To access the current user from global state reference like this
    //this.props.curUser

    state = {
        name: this.props.curUser.name,
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

const mapStateToProps = (state) => {
  return {
      curUser: state
  }
}


export default connect(mapStateToProps)(Event);

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