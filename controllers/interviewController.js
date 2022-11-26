const mongoose = require('mongoose');
const Interview = require('../models/interviewModel');
const User=require('../models/userModel')


const interviewController = {
    getInterview: async function (req, res) {
        const interview = await Interview.find();
        res.json(interview)
    },
    updateinterview:async function (req, res) {
        const { question } =req.body;
        const {Id} = req.params;
        const userToBeUpdated = await Interview.findByIdAndUpdate(
        Id,
        { question},
        { new: true }
    );
    res.json(userToBeUpdated)
    },
    getInterviewbycategory: async function (req, res) {
        const {id}= req.params
        const interview = await Interview.findOne({ category: id })
        let primerindiciealeatorio=Math.floor(Math.random()*3);
        
        let segundoindicealeatorio=Math.floor(Math.random()*3)
        while(primerindiciealeatorio===segundoindicealeatorio){
            segundoindicealeatorio=Math.floor(Math.random()*3)
        }
        
        let tercerindicealeatorio=Math.floor(Math.random()*3)
        while(segundoindicealeatorio===tercerindicealeatorio||primerindiciealeatorio===tercerindicealeatorio){
            tercerindicealeatorio=Math.floor(Math.random()*3)
        }
        
        let array=[interview.question[primerindiciealeatorio],interview.question[segundoindicealeatorio],interview.question[tercerindicealeatorio]]        
        res.json(array)
    },
    registerInterviewtouser:async function(req,res){
        const{interviewId}=req.params
        const{userId,grade}=req.body
        const searchInterview=await Interview.findOne({_id:interviewId}).populate("_id")
        const usertobeupdated=await User.findById(userId)
        let interview=usertobeupdated.interview
        let results=usertobeupdated.results
        
        if(interview.includes(interviewId)){

           let indice=results.findIndex((objeto,indice,personas)=>{            
            return objeto.interview==interviewId    
            })
           results[indice]={interview:interviewId,grade:grade}          
           
            const registerproperty=await User.findByIdAndUpdate (userId,
                {interview, results },
                { new: true } )
                res.json(registerproperty)

        }else{
            let i=searchInterview._id
            results.push({interview:interviewId,grade:grade})        
            interview.push(i)                 
            
            const registerproperty=await User.findByIdAndUpdate (userId,
            {interview,results },
            { new: true }     
          )
          res.json(registerproperty)
            
        } 

    }    
    };


module.exports = interviewController;