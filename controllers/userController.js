const mongoose = require("mongoose");
const User = require("../models/userModel");
const { MongoUnexpectedServerResponseError } = require("mongodb");


const userController={
    getUserid: async function (req, res) {
        const {email}=req.body
        const newUser = new User();
        
        newUser.email = email;   
        const searchEmail = await User.findOne({ email: email });
        res.json(searchEmail._id)
      },
    registerUser: async function (req, res) {
        const {name,email}=req.body
        const newUser = new User();
        newUser.name = name;
        newUser.email = email;   
        const searchEmail = await User.findOne({ email: email });
        if (!searchEmail){
        try {
          const savedUser = await newUser.save();
          res.json(savedUser);
        } catch (error) {
          console.log("Error");
        }
        res.json();
        }else{
          res.json("user exists")
        }
      },
      
      getuseresults:async function (req, res) {
        const{interview}=req.body
        console.log(interview)

        const user = await User.find();
        
        let array=user.map((user,index)=>{
          return user.results
        })

        let array2=array.map((result,index)=>{
          return result[index]
        })
        

        

        res.json(array2)
        
        
        
        
        
      }
}
module.exports = userController;