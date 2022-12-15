const express=require("express")
const app=express()
var cors = require('cors')

const mongoose=require("mongoose")
const bodyparser=require("body-parser")
app.use(cors()) // Use this after the variable declaration

app.use(express.urlencoded({extended:"true"}))

const MONGO_URI="mongodb+srv://SAI:lmsmanagement@cluster0.sxekr6i.mongodb.net/Sliptest?retryWrites=true&w=majority"

mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })


const Schema=mongoose.Schema({
    
})
const model=mongoose.model("student",Schema);
app.post("/upload",(req,res)=>{
    console.log(req.body);
    const person=new model({
        name:req.body.student.name,
        email:req.body.student.email,
    })
    person.save().then((res)=>{
        console.log(res);
    })

})
app.listen(5001,()=>{
    console.log("Server connected ");
})