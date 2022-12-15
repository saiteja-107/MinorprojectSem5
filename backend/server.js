const express=require("express")
const mongoose=require("mongoose")
const nodemailer = require('nodemailer');
const app=express()
var cors = require('cors')
app.use(cors()) 
const bodyparser=require("body-parser")
app.use(bodyparser.urlencoded({extended:true}))
const MONGO_URI="mongodb+srv://SAI:lmsmanagement@cluster0.sxekr6i.mongodb.net/lms?retryWrites=true&w=majority"
mongoose.set('strictQuery', true);
mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
const Schema=mongoose.Schema({
    name:String,
    email:String,
    section:String,
})
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'officialmail.sender@gmail.com',
    pass: 'zdydyclpndaefryc',
  }
});
``
var mailOptions = {
  from: 'officialmail.sender@gmail.com',
  to: "",
  subject: "",
  text: " " ,
};

const mail=mongoose.model("students_details",Schema);
app.post("/message",(req,res)=>{
    const user=req.body.msg.user;
    const section=req.body.msg.section;
    const subject=req.body.msg.subject
    const description =req.body.msg.description;
    mailOptions.subject=subject;
    mailOptions.text=description;
    mail.find({section:section}).then(res=>{
        res.forEach(user1=>{
            mailOptions.to=user1.email;
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              })
        })
    })

})


app.listen(5001,()=>{
    console.log("Server started ");
})