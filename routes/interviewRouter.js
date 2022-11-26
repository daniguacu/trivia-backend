const express=require("express")
const interviewController=require("../controllers/interviewController")


const router=express.Router();

router.get("/", interviewController.getInterview);
router.post("/:id", interviewController.getInterviewbycategory);
router.post("/:interviewId", interviewController.registerInterviewtouser);


module.exports=router;