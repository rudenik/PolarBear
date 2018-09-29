const createUser = ({ name = "",socketId=null } = {}) => ({
  name,
  socketId
});

const createMessage = ({ message = "", sender = "" } = {}) => ({
  time: getTime(new Date(Date.now())),
  message,
  sender
});

const createChat = ({
  messages = [],
  name = "",
  users = [],
  sender,
  chatname,
  chatname1
} = {}) => ({
  name,
  messages,
  users,
  sender,
  typingUsers: [],
  chatname,
  chatname1
});

const getTime = date => {
  return `${date.getHours()}:${("0" + date.getMinutes()).slice(-2)}`;
};

module.exports = {
  createMessage,
  createChat,
  createUser
};