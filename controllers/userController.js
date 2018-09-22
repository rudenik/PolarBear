var db = require("../models");

module.exports = //function (app)
  {
    createUser: function (req, res)
    {
      db.User.create(req.body).then(function (dbUser)
      {
        res.json(dbUser);
      }).catch(function (err){
        console.log(err)
        res.json(err)
      })
    },
    updateUser: function (req, res)
    {
      db.User.update(req.body).then(function (dbUser)
        {
          res.json(dbUser);
        }).catch(function (err){
          console.log(err)
          res.json(err)
        })
    },
    //Get Single User
    getSingleUser: function (req, res)
    {
      db.User.findById(req.params.id).then(function (dbUser)
      {
        res.json(dbUser);
      }).catch(function (err){
        console.log(err)
        res.json(err)
      })
    }
  };

//Get All Events
// Get all friends

//Delete User

//Write Routes with creates for Users, Events and UserEvents
//Write Routes for Relationship

