const express=require("express")
const app=express()
var cors = require('cors')

const mongoose=require("mongoose")
const bodyparser=require("body-parser")
app.use(cors()) // Use this after the variable declaration
app.use(express.urlencoded({extended:"true"}))

const MONGO_URI="mongodb+srv://miniproject3:lmsit2_123@lms.xjeulfs.mongodb.net/test?retryWrites=true&w=majority"
mongoose.set('strictQuery', true);

mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
const schema=mongoose.Schema({
    time:String,
    questions:[
        {questionno:String,
        question:String,
        option1:String,
        option2:String,
        option3:String,
        option4:String,
        answer:String,
        }
    ],
})
const model=mongoose.model("tests",schema)

app.post("/upload",(req,res)=>{
console.log(req.body.arr[1])
const obj=({
    time:req.body.arr[0].time,
    questions: ([...req.body.arr[1]])
})
model.insertMany(obj)
})
app.listen(5001,()=>{
    console.log("Server connected ");
})

app.get("/testquestion",(req,res)=>{
    var ans=[]
model.find().then( resu=>{
        res.send(resu)
    }).catch(err=>{console.log("error");})

})

app.post('/Testcompleted',(req,res)=>{
console.log(req.body.response);

})