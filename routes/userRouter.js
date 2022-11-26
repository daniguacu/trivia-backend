const express=require("express")
const userController=require("../controllers/userController")


const router=express.Router();

router.post("/register", userController.registerUser);

router.post("/user", userController.getUserid);
router.post("/users", userController.getuseresults);

module.exports=router;