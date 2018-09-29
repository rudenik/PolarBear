var Sequelize=require('sequelize');
const Op = Sequelize.Op;
var db = require("../models");

module.exports = //function (app)
    {
        //When a user enters a code for user event
        createUserEvent: function (req, res)
        {
            db.sequelize.query("INSERT INTO userevents (EventId, UserProfileId, createdAt, updatedAt ) VALUES ((SELECT id FROM events WHERE eventCode = :eventcode), :userid, NOW(),NOW());",
                //replacments:{Queryname: req.params.} eg: checkInDate: req.params.checkInDate
                { replacements: { eventcode: req.body.eventCode, userid: req.body.id,  }, type: db.sequelize.QueryTypes.INSERT }
            ).then(function (dbUserEvent)
            {
                console.log(dbUserEvent);
                res.json(dbUserEvent);
            });

        },
        //Returns list of events the user has a code to for.
        //Get all Events a User has access to
        getAllUserEvents: function (req, res)
        {
            db.sequelize.query("SELECT events.eventName, userevents.EventId FROM userevents INNER JOIN events ON events.Id = userevents.EventID WHERE userevents.UserProfileId = :userone;     ",
            //replacments:{Queryname: req.params.} eg: checkInDate: req.params.checkInDate
            { replacements: { userone: req.params.id}, type: db.sequelize.QueryTypes.SELECT }
            ).then(function (dbUserEvent)
            {
                res.json(dbUserEvent);
            }).catch(function (err)
            {
                console.log(err)
                res.json(err)
            })
        }
        
        
    };