var db = require("../models");

module.exports =
    {
        //Create Entry for MATCH in matches table
        ///OBJ Requires: {useroneId, UsertwoId, status, actionuser}
        // createMatch: function (req, res)//OBJ NEEDS RES FROM USERCONTROL ID FOR FK
        // {
        //     db.Match.create(req.body).then(function (dbUserProfile)
        //     {
        //         res.json(dbUserProfile);
        //     }).catch(function (err)
        //     {
        //         console.log(err)
        //         res.json(err)
        //     })
        // },
        // //Update 
        // updateMatch: function (req, res)
        // {
        //     db.UserProfile.update(req.body, {
        //         where: {
        //             id: req.body.id
        //         }
        //     }).then(function (dbUserProfile)
        //     {
        //         res.json(dbUserProfile);
        //     }).catch(function (err)
        //     {
        //         console.log(err)
        //         res.json(err)
        //     })
        // },
        // deleteMatch: function (req, res)
        // {
        //     db.UserProfile.destroy({
        //         where: {
        //             id: req.params.id
        //         }
        //     }).then(function (dbUserProfile)
        //     {
        //         res.json(dbUserProfile)
        //     }).catch(function (err)
        //     {
        //         console.log(err)
        //         res.json(err)
        //     })
        // },
        // addMatch: function (req, res)
        // {
        //     db.sequelize.query("INSERT INTO matches (user_one_id, user_two_id, status, action_user_id) VALUES (userone, usertwo, (SELECT * FROM status WHERE statusName = statusname), actionuser)",
        //         //replacments:{Queryname: req.params.} eg: checkInDate: req.params.checkInDate
        //         { replacements: { userone: req.params.useroneid, statusname: req.params.status, actionuser: req.params.actionuser }, type: db.sequelize.QueryTypes.SELECT }
        //     ).then(function (dbMatch)
        //     {
        //         console.log(dbMatch);
        //         res.json(dbMatch);
        //     });
        // },
        // updateMatch: function (req, res)
        // {
        //     db.sequelize.query("INSERT INTO matches (user_one_id, user_two_id, status, action_user_id) VALUES (userone, usertwo, (SELECT * FROM status WHERE statusName = statusname), actionuser)",
        //         //replacments:{Queryname: req.params.} eg: checkInDate: req.params.checkInDate
        //         { replacements: { userone: req.params.useroneid, statusname: req.params.status, actionuser: req.params.actionuser }, type: db.sequelize.QueryTypes.SELECT }
        //     ).then(function (dbMatch)
        //     {
        //         console.log(dbMatch);
        //         res.json(dbMatch);
        //     });
        // },

        getEventMatches: function (req, res)
        {
            db.sequelize.query("Select UserProfileId FROM userevents where EventId = :eventid AND UserProfileId NOT IN (SELECT * FROM matches WHERE (user_one_id = :useroneid OR user_two_id = :useroneid) AND status IN (1,2) AND action_userid != useoneid ) AND userid NOT IN (SELECT * FROM matches WHERE (user_one_id = useroneid OR user_two_id = useoneid) AND status = 0 AND action_userid = useroneid)",
                //replacments:{Queryname: req.params.} eg: checkInDate: req.params.checkInDate
                { replacements: { userone: req.params.useroneid, eventid: req.params.eventid}, type: db.sequelize.QueryTypes.SELECT }
            ).then(function (dbMatch)
            {
                console.log(dbMatch);
                res.json(dbMatch);
            }).catch(function (err)
            {
                console.log(err)
                res.json(err)
            });
        },
        //Get Friends List this is list for conversations
        getUsersMatches: function (req, res)
        {
            db.sequelize.query("SELECT * FROM matches WHERE (user_one_id = userone OR user_two_id = userone AND status = 1",
                //replacments:{Queryname: req.params.} eg: checkInDate: req.params.checkInDate
                { replacements: { userone: req.params.useroneid}, type: db.sequelize.QueryTypes.SELECT }
            ).then(function (dbMatch)
            {
                console.log(dbMatch);
                res.json(dbMatch);
            }).catch(function (err)
            {
                console.log(err)
                res.json(err)
            });
        },
        //Returns 0 for no match returns 1 if match exists
        createMatch: function (req, res)
        {
            var useroneid = req.body.useroneid;
            var usertwoid = req.body.usertwoid;
            var status = req.body.status;

            if( useroneid > usertwoid)
            {
                var temp = useroneid;
                useroneid = usertwoid;
                usertwoid = temp;
            }

            db.sequelize.query("SELECT COUNT(*) FROM matches WHERE (user_one_id = :userone AND user_two_id = :usertwo)",
                //replacments:{Queryname: req.params.} eg: checkInDate: req.params.checkInDate
                { replacements: { userone: useroneid, usertwo: usertwoid}, type: db.sequelize.QueryTypes.SELECT }
            ).then(function (dbMatch)
            {
                if (dbMatch == 1)
                {
                    if(status == "Match")
                    {
                        status == "Pending"
                    }
                    //Update Match 
                    db.sequelize.query("INSERT INTO matches (user_one_id, user_two_id, status, action_user_id) VALUES (:userone, :usertwo, (SELECT * FROM status WHERE statusName = :statusname), :actionuser)",
                        //replacments:{Queryname: req.params.} eg: checkInDate: req.params.checkInDate
                        { replacements: { userone: useroneid,  usertwo: usertwoid, statusname: status, actionuser: req.body.actionuser }, type: db.sequelize.QueryTypes.INSERT }
                    ).then(function (dbMatch)
                    {
                        console.log(dbMatch);
                        res.json(dbMatch);
                    }).catch(function (err)
                    {
                        console.log(err)
                        res.json(err)
                    });
                }
                else
                {
                    if(status == "Match")
                    {
                        status == "Accept"
                    }

                    db.sequelize.query("INSERT INTO matches (user_one_id, user_two_id, status, action_user_id) VALUES (:userone, :usertwo, (SELECT * FROM status WHERE statusName = :statusname), :actionuser)",
                        //replacments:{Queryname: req.params.} eg: checkInDate: req.params.checkInDate
                        { replacements: { userone: useroneid,  usertwo: usertwoid, statusname: status, actionuser: req.body.actionuser }, type: db.sequelize.QueryTypes.INSERT }
                    ).then(function (dbMatch)
                    {
                        console.log(dbMatch);
                        res.json(dbMatch);
                    }).catch(function (err)
                    {
                        console.log(err)
                        res.json(err)
                    });
                }
                console.log(dbMatch);
                res.json(dbMatch);
            }).catch(function (err)
            {
                console.log(err)
                res.json(err)
            });
        }
    };

//Check ids asign high and low id to corrrect ids
//Match - check for relationship 
//If none - Insert relationship