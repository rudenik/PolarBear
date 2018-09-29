import axios from "axios";

export default {
  //chat functions
  saveChat:function(chatData){
    console.log(chatData);
    return axios.post("/api/chat",chatData);
  },
  getChat: function(name) {
    return axios.get("/api/chat/");
  },
  // Deletes the book with the given id
  deleteChat: function(id) {
    return axios.delete("/api/chat/" + id);
  },
  saveRoom:function(roomData){
    console.log(roomData);
    return axios.post("/api/chat/rooms");
  }
};
