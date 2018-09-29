import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Row, Col, Container } from "../../components/Grid";
import MaterialIcon, { colorPalette } from "material-icons-react";
import "./Chat.css";
import Sender from "../../components/ChatComponents/Sender";
import Receiver from "../../components/ChatComponents/Receiver";
import Chatheading from "../../components/ChatComponents/Chatheading";
import {Sidebar} from "../../components/ChatComponents/Sidebar";
import io from "socket.io-client";
import API from "../../utils/chatAPI";

const {
  MESSAGE_SENT,
  TYPING,
  USER_CONNECTED,
  MESSAGE_RECEIVED,
  PRIVATE_MESSAGE
} = require("../../store/actions");
const socket = io("localhost:3001");

class Chat extends Component {
  constructor(props) {
    super(props);
    // this.addMessage = this.addMessage.bind(this);
    this.state = {
      //   socket: null,
      //   user: null,
      //   message: "",
      //   messages: [],
      chats: [],
      activeChat: null,
      prevChat:null
    };
  }

  componentDidMount() {
    const { socket } = this.props;
    this.initSocket(socket);
    console.log(this.props.user);
   
  }

  initSocket = socket => {
    const { user } = this.props;
    // socket.emit(COMMUNITY_CHAT, this.resetChat);
    socket.on(USER_CONNECTED,function(data){
      console.log(data);
    })
    socket.on(PRIVATE_MESSAGE, this.addChat);
  };

  sendOpenPrivateMessage = receiver => {
      console.log("send open private message");
      console.log(receiver);
    const { socket, user } = this.props;
    console.log(socket);
    console.log(user);
    socket.emit(PRIVATE_MESSAGE, { receiver, sender: user.name });
  };
  

  resetChat = chat => {
    return this.addChat(chat, true);
  };

  addChat = (chat, reset) => {
    const { socket } = this.props;
    const { chats,prevChat } = this.state;
    
    const newChats = reset ? [chat] : [...chats, chat];
    this.setState({ chats: newChats },()=>{
      console.log(this.state.chats);
    });
    

    const messageEvent = `${MESSAGE_RECEIVED}-${chat.id}`;
    const typingEvent = `${TYPING}-${chat.id}`;

    socket.on(typingEvent, this.updateTypingInChat(chat.id));
    socket.on(messageEvent, this.addMessageToChat(chat.id));
  };

  addMessageToChat = chatId => {
    console.log(chatId);
    return message => {
      console.log(message);
      const { chats } = this.state;
      let newChats = chats.map(chat => {
        if (chat.id === chatId) {
          chat.messages.push(message);
        }
        return chat;
      });
      this.setState({ chats: newChats });
    };
  };

  updateTypingInChat = chatId => {
    return ({ isTyping, user }) => {
      if (user !== this.props.user.name) {
        const { chats } = this.state;
        let newChats = chats.map(chat => {
          if (chat.id === chatId) {
            if (isTyping && !chat.typingUsers.includes(user)) {
              chat.typingUsers.push(user);
            } else if (!isTyping && chat.typingUsers.includes(user)) {
              chat.typingUsers = chat.typingUsers.filter(x => x !== x);
            }
          }
          return chat;
        });
        this.setState({ chats: newChats });
      }
    };
  };

  sendMessage = (chatId, message) => {
    const { socket } = this.props;
    console.log(chatId);
  //  socket.emit('create','room1');
    socket.emit(MESSAGE_SENT, { chatId, message });
  };

  sendTyping = (chatId, isTyping) => {
    const { socket } = this.props;
    socket.emit(TYPING, { chatId, isTyping });
  };

  setActiveChat = activeChat => {
    this.setState({ activeChat });
  };

  render() {
    const { user, logout } = this.props;
    const { chats, activeChat } = this.state;
    console.log(this.state.chats);
    return (
      <Container customClass="chat_main_container">
        <Sidebar
          logout={logout}
          chats={chats}
          user={user}
          activeChat={activeChat}
          setActiveChat={this.setActiveChat}
          onSendPrivateMessage={this.sendOpenPrivateMessage}
        />

        <div className="chat_room_container">
          {activeChat ? ([
            // <div customClass="mainChatContainer">
              <Chatheading name={activeChat.name} />,
              <div className="chat_area">
                <Receiver
                  messages={activeChat.messages}
                  user={user}
                  typingUsers={activeChat.typingUsers}
                />
              </div>,
              <Sender
                sendMessage={message => {
                  this.sendMessage(activeChat.id, message);
                }}
                sendTyping={isTyping => {
                  this.sendTyping(activeChat.id, isTyping);
                }}
              />
            // </div>
            ]) : (
            <div className="chat_room_choose">
              <h3>Choose a chat!</h3>
            </div>
          )}
        </div>
      </Container>
    );
  }
}

export default Chat;