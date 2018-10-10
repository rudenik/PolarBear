import React, { Component } from "react";
import "./Sidebar.css";
import { Users } from "./Users";
import io from "socket.io-client";
import { connect } from "react-redux";
import ChatAPI from "../../../utils/chatAPI";
const {
  USER_CONNECTED,
  USER_ONLINE,
  USER_DISCONNECTED
} = require("../../../store/actions");
const socketUrl = "http://localhost:3001";
const socket = io("localhost:3001");

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiver: "",
      users: []
    };
  }

  componentDidMount() {
    console.log(this.props.users);
    this.setState({users:this.props.users})
  }

  activateUser = (id, e) => {
    e.preventDefault();
    // console.log(id);
    this.props.openThisChat(id);
  };

  render() {
    const { name } = this.props;

    let content = [];
    {
      this.props.users.map(user => {
        console.log(user);
        console.log(name);
        if (user.name !== name) {
          content.push(<Users users={user} click={this.activateUser} />);
        }
      });
    }
    return (
      <div id="side-bar">
        <div className="current-user">
          <span>{name}</span>
        </div>

        <div className="restOfUsers">{content}</div>
      </div>
    );
  }
}

export default Sidebar;
