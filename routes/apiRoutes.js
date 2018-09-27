const router = require('express').Router();

const userProfileController = require("../controllers/userProfileController");
const usereventsController = require("../controllers/usereventsController");
const matchController = require("../controllers/matchController");


//userProfile Routes
router.route("/userprofile/:id")//this works
    .get(userProfileController.findById)
    .delete(userProfileController.remove);
router.route("/api/userprofile")
    //.get(userController.findAll)
    .post(userProfileController.createUserProfile)
    .put(userProfileController.updateUserProfile);

//======================================================

//userEvents Routes
router.route("/api/userevent")
    .post(usereventsController.createUserEvent)
router.route("/api/userevent/:id")
    .get(usereventsController.getAllUserEvents);


//======================================================

//MATCH ROUTES
router.route("api/match")//:useroneid/:usertwoid/:status/:actionuser
    .post(matchController.createMatch);
router.route("/api/match/:useroneid")
    .get(matchController.getUsersMatches);
router.route("api/match/:useroneid/:eventid" )
    .get(matchController.getEventMatches);





module.exports = router; 
