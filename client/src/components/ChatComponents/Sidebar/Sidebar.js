import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiver: ""
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

  render() {
console.log("sidebar stuff")
console.log(this.state.receiver);/*woorks*/
    const { chats, activeChat, user, setActiveChat, logout } = this.props;
    const { receiver } = this.state;

    return (
      <div id="side-bar">
        <form onSubmit={this.handleSubmit} className="search">
          <i className="search-icon">{/* <FASearch /> */}</i>
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
            e.target === this.refs.user && setActiveChat(null);
          }}
        >
          {chats.map(chat => {
            console.log(chat);
            if (chat.name) {
              const lastMessage = chat.messages[chat.messages.length - 1];
              const chatSideName =
                chat.users.find(name => {
                  return name !== user.name;
                }) || "Community";
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
                    {lastMessage && (
                      <div className="last-message">{lastMessage.message}</div>
                    )}
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
