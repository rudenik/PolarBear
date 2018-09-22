import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Row, Col, Container } from "../../components/Grid";
import MaterialIcon, { colorPalette } from "material-icons-react";
import "./Chat.css";
import Sender from "../../components/ChatComponents/Sender";
import Receiver from "../../components/ChatComponents/Receiver";
import io from 'socket.io-client';
const socket=io.connect("http://localhost:3001");
class Chat extends Component {
constructor(props){
    super(props);

    this.state={
        socket:null
    }
}

componentWillMount(){
    this.initSocket();
}

initSocket=()=>{
    socket.on('connect',()=>{
        console.log('connected');
    })
}



  render() {
    return [
      <Container customClass="mainChatContainer">
        <div class="col s12 m12 userBar">
          <div className="userPhoto">
            <img
              src="http://www.placepuppy.net/1p/200/200"
              alt=""
              className="headShot"
            />
          </div>
          <div className="userInfo">
            <p>{this.props.name}</p>
            <p>{this.props.title}</p>
          </div>
          <div className="icons">
            <MaterialIcon icon="account_circle" color="black" />
            <MaterialIcon icon="message" />
          </div>
        </div>

        <div className="chatArea">blah blah
        
        
        
        </div>
        <div class="type_msg">
          <div class="input_msg_write">
            <input type="text" class="write_msg" placeholder="Type a message" />
          </div>
        </div>
      </Container>
    ];
  }
}

const mapStateToProps = state => {
  return {
    name: state.userName,
    title: state.userTitle
  };
};

export default connect(mapStateToProps)(Chat);
