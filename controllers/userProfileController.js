var db = require("../models");

module.exports =
  {
    createUserProfile: function (req, res)//OBJ NEEDS RES FROM USERCONTROL ID FOR FK
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
    getSingleUserProfile: function (req, res)
    {
      db.UserProfile.findById(req.params.id).then(function (dbUserProfile)
      {
        res.json(dbUserProfile);
      }).catch(function (err)
      {
        console.log(err)
        res.json(err)
      })
    },
    deleteUserProfile: function (req, res)
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
