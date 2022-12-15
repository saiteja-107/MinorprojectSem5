const express=require("express")
const app=express()
var cors = require('cors')

const mongoose=require("mongoose")
const bodyparser=require("body-parser")
app.use(cors()) // Use this after the variable declaration

app.use(express.urlencoded({extended:"true"}))

const MONGO_URI="mongodb+srv://miniproject3:lmsit2_123@lms.xjeulfs.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', true);
mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

app.post("/upload",(req,res)=>{
    console.log(req.body);
})
app.listen(5001,()=>{
    console.log("Server connected ");
})