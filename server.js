const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const apiRoutes = require("./routes");
const app = express();
const server = require("http").Server(app);
const io = module.exports.io=require("socket.io")(server);
const PORT = process.env.PORT || 3001;
const SocketManager = require("./SocketManager");

//define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//add routes
app.use(apiRoutes);

// //Requiring our models for syncing
var db = require("./models");

// Static directory
app.use(express.static("public"));

//connect to mongodb
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactnytsearch",
//   { useNewUrlParser: true }
// );


db.sequelize.sync({ force: false }).then(function ()
{
  server.listen(PORT, function ()
  {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
io.on("connection", SocketManager);

});

// io.on("connection", SocketManager);
// io.on("connection", function(socket) {
//   console.log("user connected at socket id "+socket.id);
//   socket.on('SEND_MESSAGE', function(data){
//     console.log(data);
//     io.emit('RECEIVE_MESSAGE', data);
// })
// });
