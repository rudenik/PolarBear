const io = require("./server").io;
const {
  VERIFY_USER,
  USER_CONNECTED,
  USER_ONLINE,
  COMMUNITY_CHAT,
  USER_DISCONNECTED,
  LOGOUT,
  MESSAGE_RECEIVED,
  MESSAGE_SENT,
  TYPING,
  PRIVATE_MESSAGE
} = require("./client/src/store/actions");
const {
  createUser,
  createMessage,
  createChat
} = require("./client/src/store/Factories");

let connectedUsers = []; //will have user name, user id and anything with it
let communityChat = createChat();
let chatRooms = [];
let tempRooms = [];

module.exports = function(socket) {
  socket.on(USER_CONNECTED, data => {
    // console.log("testing",data);
    // user.socketId = socket.id;
    socket.user = data.name;
    socket.gid = data.googleId;

    connectedUsers = addUser(connectedUsers, data, socket);
    
    console.log("user connected", connectedUsers);
    io.sockets.emit(USER_ONLINE, connectedUsers);
  });

  /********************USER DISCONNECTS**************************************/
  socket.on("disconnect", () => {
    connectedUsers.map((user, index) => {
      if (user.name === socket.user) {
        console.log("this user", socket.user);
        connectedUsers.splice(index, 1);
        console.log(connectedUsers);
        io.sockets.emit(USER_DISCONNECTED, user);
        // io.sockets.emit(USER_DISCONNECTED, connectedUsers);
      }
    });
  });

  /********************CREATE ROOM**************************************/
  socket.on("checkroom", data => {
    console.log("create chat room-----------");
    console.log(data);
    let sender = data.sender.name;
    let senderid = data.sender.sid;
    let receiver = data.receiver.name;

    let receiverSocketId = data.receiver.sid;
  

    // let matchReceiver=connectedUsers.filter(user=>{
    //   return user.name===receiver;
    // });
    console.log("--------checkroom--------");
    console.log(receiverSocketId);
    let socketR=io.sockets.connected[receiverSocketId];
    socket.join(sender);
    socketR.join(sender);
    
    
    io.in(sender).emit("testmsg", "hellloo");
  //  io.to(socketR.id).emit("testmsg","FOR YOUR EYES ONLY");

  });

  /********************HANDLE MESSAGES**************************************/
  socket.on(MESSAGE_SENT, data => {
    console.log(socket.id);
    console.log(data);
    // socket.join(data.room);

    // io.sockets.in(data.room).emit(MESSAGE_RECEIVED, data);
   
  });
};

function addUser(userList, user,socket) {
  console.log("---------ADDING USER ON CONNECTION-----", userList);
  console.log(user);
  console.log(socket.id);
  user.socket=socket.id;
  let newList = [...userList, user];
  return newList;
}

