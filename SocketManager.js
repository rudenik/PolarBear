const io = require("./server").io;
const {
  VERIFY_USER,
  USER_CONNECTED,
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
let connectedUsers = {}; //will have user name, user id and anything with it
let communityChat = createChat();

module.exports = function(socket) {
  // console.log("socket id " + socket.id);
  let sendMessageToChatFromUser;
  let sendTypingFromUser;

  //verify usernmae
  socket.on(VERIFY_USER, (nickname, callback) => {
    if (isUser(connectedUsers, nickname)) {
      callback({ isUser: true, user: null });
    } else {
      callback({
        isUser: false,
        user: createUser({ name: nickname, socketId: socket.id })
      });
    }
  });

  /********************USER CONNECTED**************************************/
  socket.on(USER_CONNECTED, user => {
    user.socketId = socket.id;
    connectedUsers = addUser(connectedUsers, user);
    socket.user = user;

    sendMessageToChatFromUser = SendMessageToChat(user.name);
    sendTypingFromUser = sendTypingToChat(user.name);

    io.emit(USER_CONNECTED, connectedUsers);
    console.log("connected users");
    console.log(connectedUsers);/*works*/
  });

  /********************COMMUNITY CHAT**************************************/
  // socket.on(COMMUNITY_CHAT, callback => {
  //   callback(communityChat);
  // });

  /********************USER DISCONNECTS**************************************/
  socket.on("disconnect", () => {
    if ("user" in socket) {
      connectedUsers = removeUser(connectedUsers, socket.user.name);
      io.emit(USER_DISCONNECTED, connectedUsers);
    }
  });

  /********************USER LOGOUT**************************************/
  socket.on(LOGOUT, () => {
    connectedUsers = removeUser(connectedUsers, socket.user.name);
    io.emit(USER_DISCONNECTED, connectedUsers);
  });

  /********************MESSAGE SENT**************************************/
  socket.on(MESSAGE_SENT, ({ chatId, message }) => {
    sendMessageToChatFromUser(chatId, message);
  });

  /********************SEND TYPING STATUS**************************************/
  socket.on(TYPING, ({ chatId, isTyping }) => {
    sendTypingFromUser(chatId, isTyping);
    console.log(chatId, isTyping);
  });

  /********************PRIVATE MESSAGE**************************************/
  socket.on(PRIVATE_MESSAGE, ({ receiver, sender }) => {
    console.log("socket manager")
    console.log(receiver);
    console.log(sender);
    console.log(connectedUsers);
    if (receiver in connectedUsers) {
      const newChat = createChat({
        name: `${receiver}&${sender}`,
        users: [receiver, sender]
      });
      const receiverSocket = connectedUsers[receiver].socketId;
      socket.to(receiverSocket).emit(PRIVATE_MESSAGE, newChat);
      socket.emit(PRIVATE_MESSAGE, newChat);
    }
  });
};

function sendTypingToChat(user) {
  return (chatId, isTyping) => {
    io.emit(`${TYPING}-${chatId}`, { user, isTyping });
  };
}

function SendMessageToChat(sender) {
  return (chatId, message) => {
    io.emit(
      `${MESSAGE_RECEIVED}-${chatId}`,
      createMessage({ message, sender })
    );
  };
}

function addUser(userList, user) {
  let newList = Object.assign({}, userList);
  newList[user.name] = user;
  return newList;
}

function removeUser(userList, username) {
  let newList = Object.assign({}, userList);
  delete newList[username];
  return newList;
}

function isUser(userList, username) {
  //checks if username in connected user list
  return username in userList;
}
