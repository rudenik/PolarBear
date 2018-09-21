const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const server=require('http').Server(app);
const io = require("socket.io")(server);
const PORT = process.env.PORT || 3001;

//define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//add routes
app.use(routes);

//connect to mongodb
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactnytsearch",
//   { useNewUrlParser: true }
// );

//start the api server
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
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
