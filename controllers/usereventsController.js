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
        
        //Get a Users Match List 
        //TODO: UPATE WITH QUERY FROM EMAIL REMOVE POSSIBLY to another controller
        //GET all User for Event For User to Match With
        getAllEventUsers: function (req, res)
        {
            db.UserEvents.findAll({
                where: {
                    EventId: req.params.eventid,
                    [Op.ne]: req.params.userid
                }
            }).then(function (dbUserEvents)
            {
                res.json(dbUserEvents);
            }).catch(function (err)
            {
                console.log(err)
                res.json(err)
            })
        }

        ///EVENTCONTROLLER
        // getEventMatches: function(req, res) {
        //   db.sequelize.query("SELECT * FROM matches WHERE (user_one_id = userone OR user_two_id = usertwo AND status = 1",
        //       //replacments:{Queryname: req.params.} eg: checkInDate: req.params.checkInDate
        //       { replacements: { userone: req.params.useroneid, statusname: req.params.status, actionuser: req.params.actionuser }, type: db.sequelize.QueryTypes.SELECT }
        //   ).then(function(dbMatch) {
        //       console.log(dbMatch);
        //       res.json(dbMatch);
        //   }).catch(function(err) {
        //       console.log(err)
        //       res.json(err)
        //   });
    };