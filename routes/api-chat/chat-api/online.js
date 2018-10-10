const router = require("express").Router();
const chatController = require("../../../controllers/chatController");

//CHAT ROUTES
router.route("/").post(chatController.saveOnlineUsers).get(chatController.findUsers);

// Matches with "/api/chat/:id"
router
  .route("/:id")
  .get(chatController.getTargetUser);
  

module.exports = router;
