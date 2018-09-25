const router = require('express').Router();
const userProfileController = require("../controller/userProfileController");
const usereventsController = require("../controller/usereventsController");
const matchController = require("../controller/matchController");


//userProfile Routes
router.route("/api/userprofile")
    //.get(userController.findAll)
    .post(userProfileController.createUserProfile)
    .put(userProfileController.updateUserProfile);
router.route("/api/userprofile/:id")
    .get(userProfileController.findById)
    .delete(userProfileController.remove);

//======================================================

//userEvents Routes
router.route("/api/userevent")
    .post(usereventsController.createUserEvent)
router.route("/api/userevent/:id")
    .get(usereventsController.getAllUserEvents);


//======================================================

//MATCH CONTROLLER
router
    .route("/api/match")
    .post(matchController.createMatch);
//

router.route("/api/match/:useroneid")
    .get(matchController.getUserMatches);


module.exports = router; 
