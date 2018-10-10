const path=require("path");
const router=require("express").Router();
const chatRoutes=require("./chat-api");

router.use("/api",chatRoutes);

router.use(function(req,res){
    res.sendFile(path.join(__dirname,"../../client/build/index.html"));
});

module.exports=router;