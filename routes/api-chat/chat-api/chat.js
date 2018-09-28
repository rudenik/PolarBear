const router = require("express").Router();
const chatController = require("../../../controllers/chatController");

//CHAT ROUTES
router.route("/").get(chatController.findAll).post(chatController.save);

// Matches with "/api/chat/:id"
router
  .route("/:id")
  .get(chatController.findById)
  .put(chatController.update)
  .delete(chatController.remove);
module.exports = router;
