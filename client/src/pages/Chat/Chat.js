import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Row, Col, Container } from "../../components/Grid";
import MaterialIcon, { colorPalette } from "material-icons-react";
import "./Chat.css";
import Sender from "../../components/ChatComponents/Sender";
import Receiver from "../../components/ChatComponents/Receiver";
import Chatheading from "../../components/ChatComponents/Chatheading";
import { Sidebar } from "../../components/ChatComponents/Sidebar";
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

class Chat extends Component {

  constructor(props) {
    super(props);
    // this.addMessage = this.addMessage.bind(this);
    this.state = {
     
    };
  }


  componentDidMount(){
    console.log(this.props.curUser);
  }

  render() {
 
    const {user} = this.props.curUser;

    return [
      <Container customClass="chat_main_container">
        <Sidebar name={this.props.curUser.name}/>

        <div className="chat_room_container">
          <div customClass="mainChatContainer">
            <Chatheading />
            <div className="chat_area">
              <Receiver />
            </div>
            <Sender />
          </div>
        </div>
      </Container>
    ];
  }
}


const mapStateToProps = state => {
  return {
    curUser: state
  };
};

export default connect(mapStateToProps)(Chat);
