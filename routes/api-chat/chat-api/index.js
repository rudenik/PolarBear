const router=require("express").Router();
const chatRoutes=require("./chat");
const onlineRoutes=require("./online");


router.use("/chat/online",onlineRoutes).use("/chat",chatRoutes);

module.exports=router;