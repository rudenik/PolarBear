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
  name = "Community",
  users = [],
  sender
} = {}) => ({
  name,
  messages,
  users,
  sender,
  typingUsers: []
});

const getTime = date => {
  return `${date.getHours()}:${("0" + date.getMinutes()).slice(-2)}`;
};

module.exports = {
  createMessage,
  createChat,
  createUser
};