require("dotenv").config();
const express= require("express");
const mongoose=require("./utils/database")
const cors = require('cors');
const path = require('path');
const app=express()
const userRouter = require('./routes/userRouter');
const categoryRouter = require('./routes/categoryRouter');
const interviewRouter = require('./routes/interviewRouter');
function connection(){
    console.log('Servidor rulando');


}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRouter);
app.use('/category', categoryRouter);
app.use('/interview', interviewRouter);

app.listen(process.env.PORT,connection)



