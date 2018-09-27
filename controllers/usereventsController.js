var Sequelize=require('sequelize');
const Op = Sequelize.Op;
var db = require("../models");

module.exports = //function (app)
    {
        //When a user enters a code for user event
        createUserEvent: function (req, res)
        {
            db.sequelize.query("INSERT INTO userevents (EventId, UserProfileId, createdAt, updatedAt ) VALUE ((SELECT id FROM events WHERE eventCode = :eventcode), :userid, NOW(),NOW()",
                //replacments:{Queryname: req.params.} eg: checkInDate: req.params.checkInDate
                { replacements: { eventcode: req.body.eventCode, userid: req.body.id }, type: db.sequelize.QueryTypes.INSERT }
            ).then(function (room)
            {
                console.log(room);
                res.json(room);
            });

        },
        //Returns list of events the user has a code to for.
        //Get all Events a User has access to
        getAllUserEvents: function (req, res)
        {
            db.UserEvents.findAll({
                where: {
                    UserProfileId: req.params.id
                },
                include: [db.Events]//Using this to get events details such as name in res

            }).then(function (dbUserProfile)
            {
                res.json(dbUserProfile);
            }).catch(function (err)
            {
                console.log(err)
                res.json(err)
            })
        },
        
    };