const router = require('express').Router();
const userController = require("../controller/userController");

router.route("/")
    .get(userController.findAll)
    .post(userController.create);
router
    .route("/:id")
    .get(userController.findById)
    // .put(articleController.update)
    .delete(userController.remove);

module.exports = router; 
