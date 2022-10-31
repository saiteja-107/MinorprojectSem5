

var nodemailer = require('nodemailer');
var name='saiteja';
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
  to: '160120737107kotlasaiteja@gmail.com',
  subject: `Hi ${name}`,
  text: ` You got mail from ${user} `
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});