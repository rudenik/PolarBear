const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  user: { type: String},
  chat:[],
  _id: { type: String}
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
