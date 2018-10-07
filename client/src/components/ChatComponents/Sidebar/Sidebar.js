import React, { Component } from "react";
import "./Sidebar.css";
import {Users} from "./Users";
import io from "socket.io-client";
import { connect } from "react-redux";

const { USER_CONNECTED, USER_DISCONNECTED } = require("../../../store/actions");
const socket = io("localhost:3001");

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiver: "",
      connectedUsers: null
    };
  }


  render() {
    

    const { name} = this.props;
  
 
    return (
      <div id="side-bar">
        <div className="current-user">
          <span>{name}</span>
        </div>
        <div className="restOfUsers">
        <Users/>
        </div>
      </div>
    );
  }
}

export default Sidebar;
