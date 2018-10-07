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
let chatRooms = [];
let tempRooms = [];

module.exports = function(socket) {
  
};

