var express=require('express')
const app=express()
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/home",(req,res)=>
{
    res.sendFile(__dirname+"/home.html")
})

app.post("/send",(req,res)=>{
    const email=req.body.email;
    const description=req.body.des;

    var nodemailer = require('nodemailer');
    var name='Student ';
    var user='officialmail.sender@gmail.com';
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { 
        user: 'officialmail.sender@gmail.com',
        pass: 'rrpnwpuqnsxqgrxp',
      }
    });
    var mailOptions = {
      from: 'officialmail.sender@gmail.com',
      to: email,
      subject: `Hi ${name}`,
      text: description,
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.sendFile(__dirname+"/failure.html")
        console.log(err);
      } else {
        res.sendFile(__dirname+"/success.html")
        console.log(info)
    
      }
    });


})


app.listen(3000,()=>{
    console.log("Connection establish ")
})



