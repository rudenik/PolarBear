import React, { Component } from 'react'
import "./Event.css"
import API from "../../utils/API"
import { InputText, InputArea } from "../../components/event__form";
import { Row, Col, Container } from "../../components/Grid";
import {Button, Dropdown, NavItem} from 'react-materialize';
import { connect } from "react-redux";
import io from "socket.io-client";


const socketUrl = "http://localhost:3001";
const socket = io("localhost:3001");

const {
    MESSAGE_SENT,
    TYPING,
    USER_CONNECTED,
    MESSAGE_RECEIVED,
    PRIVATE_MESSAGE
  } = require("../../store/actions");
class Event extends Component {
  //To access the current user from global state reference like this
    //this.props.curUser

    state = {

        name: this.props.curUser.name,
        eventCode: "",
        choice:"",
        socket:null
    };
componentDidMount(){
  socket.on("connect", () => {
    console.log("Connected");
    socket.emit(USER_CONNECTED, this.props.curUser);
  });
  this.setState({ socket });
}
    handleInputChange = event => {
        const {
          name,
          value
        } = event.target;
      }
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
     <div className="event__centerContent">

        <p className="event__username">Hi {this.state.name}!</p>

        <InputText className="event__code" fieldName="Event Code" inputId="eventCode" matIcon="event" onChange={this.handleInputChange}/>


         <button type="button" className="waves-effect waves-light btn event__btn" onClick={this.handleSignUpButton}>Sign Up for Event </button>

        </div>
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

