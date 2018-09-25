import React, { Component } from "react";
import "./Sidebar.css";

import io from "socket.io-client";
import { connect } from "mongoose";
const { USER_CONNECTED, USER_DISCONNECTED } = require("../../../store/actions");
const socket = io("localhost:3001");

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiver: "",
      connectedUsers: null
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const { receiver } = this.state;
    console.log("receiver from chat component");
    console.log(receiver);
    const { onSendPrivateMessage } = this.props;

    onSendPrivateMessage(receiver);
  };

  componentDidMount() {
    this.initSocket();
  }

  initSocket = () => {
    socket.on(USER_CONNECTED, el => {
      console.log("ONLINE");
      console.log(el);
      this.setState(
        prevState => {
          return {
            connectedUsers: el
          };
        },
        () => {
          console.log(this.state.connectedUsers);
        }
      );
    });

    socket.on(USER_DISCONNECTED, el => {
      console.log("OFFLINE");
      console.log(el);
      this.setState(prevState => {
        return {
          connectedUsers: el
        };
      });
    });
  };

  render() {
    console.log("sidebar stuff");
    console.log(this.state.receiver); /*woorks*/
    console.log("connected users");
    console.log(this.state.connectedUsers);

    const { chats, activeChat, user, setActiveChat, logout } = this.props;
    const { receiver, connectedUsers } = this.state;

    return (
      <div id="side-bar">
        <form onSubmit={this.handleSubmit} className="search">
        <i className="search-icon"></i>
          <input
            placeholder="Search"
            type="text"
            value={receiver}
            onChange={e => {
              this.setState({ receiver: e.target.value });
            }}
      />

        </form>
        <div
          className="users"
          ref="users"
          onClick={e => {
            e.target === this.refs.users && setActiveChat(null);
          }}
        >
          {chats.map(chat => {
            console.log(chat);
            if (chat.name) {
              const lastMessage = chat.messages[chat.messages.length - 1];
              const chatSideName =
                chat.users.find(name => {
                  return name !== user.name;
                }) || null;
              const classNames =
                activeChat && activeChat.id === chat.id ? "active" : "";

              return (
                <div
                  key={chat.id}
                  className={`user ${classNames}`}
                  onClick={() => {
                    setActiveChat(chat);
                  }}
                >
                  <div className="user-photo">{/* pass photo in here*/}</div>
                  <div className="user-info">
                    <div className="name">{chatSideName}</div>
                    {lastMessage ? (
                      <div className="last-message">
                        {lastMessage.message.length > 10
                          ? lastMessage.message.substring(0, 10).concat("...")
                          : lastMessage.message}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
        <div className="current-user">
          <span>{user.name}</span>
          {/* <div
            onClick={() => {
              logout();
            }}
            title="Logout"
            className="logout"
          >
            <button>logout</button>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Sidebar;
