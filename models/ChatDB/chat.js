const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  _id: { type: String },
  rroom: { type: String },
  room_id: [],
  messages: []
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
