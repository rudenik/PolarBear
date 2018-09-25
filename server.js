const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./controllers/userProfileController");
const app = express();
const server = require('http').Server(app);
const io = require("socket.io")(server);
const PORT = process.env.PORT || 3001;


//define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production")
{
  app.use(express.static("client/build"));
}

//add routes
//app.use(routes);
require('./controllers/userProfileController')

// //Requiring our models for syncing
var db = require("./models");


// Static directory
app.use(express.static("public"));


//connect to mongodb
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactnytsearch",
//   { useNewUrlParser: true }
// );

//start the api server
db.sequelize.sync({ force: false }).then(function ()
{
  app.listen(PORT, function ()
  {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});


// io.on("connection", function(socket) {
//   console.log("user connected");

//   socket.on("saved", data => {
//     console.log(data);
//     socket.broadcast.emit("send to all", data);
//   });

//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
// });

// app.listen(PORT, () => {
//   console.log('sjkbkhbsv')
// })