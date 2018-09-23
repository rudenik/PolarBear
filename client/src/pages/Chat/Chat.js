import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Row, Col, Container } from "../../components/Grid";
import MaterialIcon, { colorPalette } from "material-icons-react";
import "./Chat.css";
import Sender from "../../components/ChatComponents/Sender";
import Receiver from "../../components/ChatComponents/Receiver";
import io from "socket.io-client";

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      socket: null,
      username: "",
      message: "",
      messages: []
    };

    this.socket = io.connect();
    console.log(this.socket);

    this.socket.on("RECEIVE_MESSAGE", function(data) {
      console.log(data);
      addMessage(data);
    });

    const addMessage = data => {
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
      console.log(this.state.messages);
    };
  }

  componentWillMount() {
    // this.initSocket();
  }

  initSocket = () => {
    // const socket = io.connect();
    // this.setState({ socket });
    // socket.on("connect", () => {
    //   console.log("connected");
    //   console.log(this.state.socket);
    // });
  };

  sendMessage = event => {
    event.preventDefault();
    this.socket.emit("SEND_MESSAGE", {
      message: this.state.message
    });
    this.setState({ message: "" });
  };

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

        <div className="chat_area">
          {this.state.messages.map(message => {
            return <Sender message={message.message} />;
          })}
        </div>
        <div class="type_msg">
          <div class="input_msg_write">
          <form onSubmit={this.sendMessage}>
            <input
              type="text"
              class="write_msg"
              placeholder="Type a message"
              value={this.state.message}
              onChange={e => this.setState({ message: e.target.value })}
            />
            <button
              onClick={this.sendMessage}
              className="btn btn-primary form-control"
            >
              Send
            </button>
            </form>
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

export default Chat;
