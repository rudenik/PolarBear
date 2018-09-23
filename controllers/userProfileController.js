var db = require("../models");

module.exports = //function (app)
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
    },
    addEventToUserProfile: function (req, res)
    {
      db.sequelize.query("INSERT INTO userevents (EventId, UserProfileId, createdAt, updatedAt ) VALUE ((SELECT id FROM events WHERE eventCode = :eventcode), 2, NOW(),NOW()",
      //replacments:{Queryname: req.params.} eg: checkInDate: req.params.checkInDate
        { replacements: {eventcode: req.params.eventCode, useId: req.params.id}, type: db.sequelize.QueryTypes.SELECT }
      ).then(function (room)
      {
        console.log(room);
        res.json(room);
      });

    },
    getAllUserEvents: function (req, res)
    {
      db.UserEvents.findAll({
        where:{
          UserProfileId: req.params.id
        },
          include:[db.Events]
        
      }).then(function (dbUserProfile)
      {
        res.json(dbUserProfile);
      }).catch(function (err)
      {
        console.log(err)
        res.json(err)
      })
    }
  };

//match

//Write Routes with creates for UserProfiles, Events and UserProfileEvents
//Write Routes for Relationship

