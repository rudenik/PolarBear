const router = require('express').Router();

<<<<<<< HEAD
const userProfileController = require("../controller/userProfileController");
const usereventsController = require("../controller/usereventsController");
const matchController = require("../controller/matchController");
const chatController = require("../controllers/chatController");

=======
const userProfileController = require("../controllers/userProfileController");
const usereventsController = require("../controllers/usereventsController");
const matchController = require("../controllers/matchController");
>>>>>>> dev

//userProfile Routes
router.route("/userprofile/:id")//this works
    .get(userProfileController.findById)
    .delete(userProfileController.remove);
router.route("/userprofile")
    //.get(userController.findAll)
    .post(userProfileController.createUserProfile)
    .put(userProfileController.updateUserProfile);

//======================================================

//userEvents Routes
router.route("/userevent")
    .post(usereventsController.createUserEvent)
router.route("/userevent/:id")
    .get(usereventsController.getAllUserEvents);

//======================================================

//MATCH ROUTES
router.route("/match")//:useroneid/:usertwoid/:status/:actionuser
    .post(matchController.createMatch);
router.route("/match/:useroneid")
    .get(matchController.getUsersMatches);
router.route("/match/:useroneid/:eventid" )
    .get(matchController.getEventMatches);

<<<<<<< HEAD


    

=======
>>>>>>> dev
module.exports = router; 
