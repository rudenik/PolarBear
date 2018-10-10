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
import ChatAPI from "../../utils/chatAPI";
import io from "socket.io-client";
import chatAPI from "../../utils/chatAPI";

const socketUrl = "http://localhost:3001";
const socket = io("localhost:3001");

const {
  MESSAGE_SENT,
  TYPING,
  USER_CONNECTED,
  USER_DISCONNECTED,
  USER_ONLINE,
  MESSAGE_RECEIVED,
  PRIVATE_MESSAGE
} = require("../../store/actions");

class Chat extends Component {
  constructor(props) {
    super(props);
    // this.addMessage = this.addMessage.bind(this);
    this.state = {
      targetUser: null,
      thisUser: null,
      connectedUsers: []
    };
  }


  componentDidMount() {
    socket.on("testmsg",data=>{
      console.log(data);
    })


    //-------------when component mounts load the users-------------//
    ChatAPI.getOnlineUsers()
      .then(res => {
        console.log(res);
        let temp=[];
        res.data.map(user => {
          if (user.loggedIn) {
            temp.push(user)
            this.setState(
              prevState => {
                return {
                  connectedUsers: temp
                };
              },
              () => {
                console.log("loaded");
                console.log(this.state.connectedUsers);
              }
            );
          }
        });
      })
      .catch(err => console.log(err));


      //--------------------------save users---------------------------------------//
      this.setState({ thisUser: this.props.curUser });
    socket.on(USER_ONLINE, data => {
      console.log(data);
      this.setState(
        prevState => {
          return {
            connectedUsers: data
          };
        },
        () => {
          console.log("CONNECTED");
          console.log(this.state.connectedUsers);
        }
      );
      data.map(user => {
        const curUser = {
          name: user.name,
          photoUrl: user.photoUrl,
          googleId: user.googleId,
          sid:user.socket,
          log: true
        };
        ChatAPI.saveOnlineUsers(curUser)
          .then(res => {
            console.log(res);
          })
          .catch(err => console.log(err));
      });
    });

    //-------------when user disconnects update the db with the status-------------//
    socket.on(USER_DISCONNECTED, data => {
      const curUser = {
        name: data.name,
        photoUrl: data.photoUrl,
        googleId: data.googleId,
        sid:data.socket,
        log: false
      };
      let temp = null;
      this.state.connectedUsers.map((user, index) => {
        console.log(user);
        console.log(index);
        if (user.googleId === curUser.googleId) {
          temp = index;
        }
      });

      var k = this.state.connectedUsers;
      k.splice(temp, 1);
      this.setState(
        prevState => {
          return {
            connectedUsers: k
          };
        },
        () => {
          console.log("DISCONNECTED");
          console.log(this.state.connectedUsers);
        }
      );

      ChatAPI.saveOnlineUsers(curUser)
        .then(res => {
          console.log(res);
          console.log(this.state.connectedUsers);
        })
        .catch(err => console.log(err));
    });

   
  }

  // getMsg = () => {
  //   socket.on(MESSAGE_RECEIVED, data => {
  //     console.log(this.state.thisUser);
  //     if (this.state.thisUser.googleId === data.receiver._id) {
  //       console.log("this is the receiver");
  //     }
  //   });
  // };


  openTargetChat = targetId => {
    //---------when user clicks on a name the chat window populates with user data
    ChatAPI.getTargetUser(targetId)
      .then(res => {
        console.log(res.data);
        this.setState(
          prevState => {
            return {
              targetUser: res.data
            };
          },
          () => {
            console.log(this.state.targetUser);
           socket.emit("checkroom",{sender:this.state.thisUser,receiver:this.state.targetUser});
          }
        );
      })
      .catch(err => console.log(err));
  };

  sendMessage = msg => {
    let uniqueId = `${this.state.targetUser._id}-${
      this.state.thisUser.googleId
    }`;
    let reverseId = uniqueId
      .split("")
      .reverse()
      .join("");
    console.log("reversed id ", reverseId);
    let sendingData = {
      room: uniqueId,
      rroom: reverseId,
      message: msg,
      receiver: this.state.targetUser,
      sender: this.state.thisUser,
      socket: this.state.socket
    };
    let uniqueRoom = this.createUniqueRoom(
      this.state.targetUser,
      this.state.thisUser
    );

    ChatAPI.saveChat({ uniqueId, reverseId, uniqueRoom, msg })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));

    socket.emit(MESSAGE_SENT, sendingData);
  };

  createUniqueRoom = (receiver, sender) => {
    let temp = [];
    return [receiver._id, sender.googleId];
  };

  render() {
   

    return [
      <Container customClass="chat_main_container">
        <Sidebar
          name={this.props.curUser.name}
          users={this.state.connectedUsers}
          openThisChat={this.openTargetChat}
        />
        <div className="chat_room_container">
          <div customClass="mainChatContainer">
            <Chatheading currentUser={this.state.targetUser} />
            <div className="chat_area">
              <Receiver />
            </div>
            <Sender sendMessage={this.sendMessage} />
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
