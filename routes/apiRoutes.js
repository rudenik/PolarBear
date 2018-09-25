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
router.route("/redirect")
        .get(function (req, res){
            console.log(req.body);
            res.json("redirect hit")
        });
    

module.exports = router; 
