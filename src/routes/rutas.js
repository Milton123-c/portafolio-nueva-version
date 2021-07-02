const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

router.get('/', (req, res)=>{
     
     res.render('index');
});

router.post('/formOne',(req, res)=>{

     const {name, message} = req.body;

     gmailSend(message, name);

     res.redirect('/');
});

router.post('/formTwo', (req, res)=>{

     const{name, message} = req.body;

     gmailSend(message, name);

     res.redirect('/');
});

//funcion para enviar correo
function gmailSend(mensaje, nombre){
     const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth:{
               user:'davidmercado5772@gmail.com',
               pass:'58385772y'
          }
     });

     var mailOption = {
          from: 'davidmercado5772@gmail.com',
          to:'miltonmercado92@gmail.com',
          subject: nombre,
          text: mensaje
     };

     transporter.sendMail(mailOption, (error, infor)=>{
          if(error){
               console.log("error");
          }else{
               console.log('Email sent' + infor.response);
          }
     });
}

module.exports = router;