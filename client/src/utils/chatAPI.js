import axios from "axios";

export default {
  //chat functions
  saveChat: function(chatData) {
    console.log(chatData);
    return axios.post("/api/chat", chatData);
  },
  getChat: function(name) {
    return axios.get("/api/chat/");
  },
  // Deletes the book with the given id
  deleteChat: function(id) {
    return axios.delete("/api/chat/" + id);
  },
  saveRoom: function(roomData) {
    console.log(roomData);
    return axios.post("/api/chat/rooms");
  },

  saveOnlineUsers: function(userData) {
    console.log(userData);
    return axios.post("/api/chat/online", userData);
  },
  setToOffline: function(id) {
    return axios.put("/api/chat/online/" + id);
  },
  getOnlineUsers: function(name) {
    return axios.get("/api/chat/online");
  },
  getTargetUser: function(id) {
    return axios.get("/api/chat/online/" + id);
  }
};
