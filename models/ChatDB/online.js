const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const onlineSchema = new Schema({
  name: { type: String },
  _id: { type: String },
  photoUrl:{type:String},
  sid:{type:String},
  loggedIn: Boolean
});

const Online = mongoose.model("Online", onlineSchema);

module.exports = Online;
