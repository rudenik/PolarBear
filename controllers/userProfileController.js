var db = require("../models");

module.exports =
  {
    createUserProfile: function (req, res)
    {
      db.UserProfile.create(req.body).then(function (dbUserProfile)
      {
        res.json(dbUserProfile);
      }).catch(function (err)
      {
        console.log(err)
        res.json(err)
      })
    },
    updateUserProfile: function (req, res)
    {
      db.UserProfile.update(req.body, {
        where: {
          id: req.body.id
        }
      }).then(function (dbUserProfile)
      {
        res.json(dbUserProfile);
      }).catch(function (err)
      {
        console.log(err)
        res.json(err)
      })
    },
    //Get Single UserProfile
    findById: function (req, res)
    {
      console.log(req.params);
      db.UserProfile.findById(req.params.id).then(function (dbUserProfile)
      {
        res.json(dbUserProfile);
      }).catch(function (err)
      {
        console.log(err)
        res.json(err)
      })
    },
    remove: function (req, res)
    {
      db.UserProfile.destroy({
        where: {
          id: req.params.id
        }
      }).then(function (dbUserProfile)
      {
        
        res.json(dbUserProfile)
      }).catch(function (err)
      {
        console.log(err)
        res.json(err)
      })
    }
  };
