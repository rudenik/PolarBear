var db = require("../models");

module.exports =
    {
        
        
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


        //Returns a List of Users for requsting user to match with for the specific event
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
            //For the matches table to work correctly user_one_id must be the smaller number.
            var useroneid = req.body.useroneid;
            var usertwoid = req.body.usertwoid;
            var status = req.body.status;
            if( useroneid > usertwoid)
            {
                var temp = useroneid;
                useroneid = usertwoid;
                usertwoid = temp;
            }
            //Find if the selected match already exists in the table
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
                    //Create Entry for MATCH in matches table
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
                    //Update Status and action user.
                    db.sequelize.query("UPDATE matches SET status = (SELECT * FROM status WHERE statusName = :statusname, action_user_id = :actionuser) WHERE  user_one_id = :userone AND user_two_id = :usertwo",
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