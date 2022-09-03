import nodemailer from 'nodemailer';
import dotenv from 'dotenv'



const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", //replace with your email provider
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  // verify connection configuration
transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });


export const sendEmail = (req, res) =>{

    // const { name, email, subject, message } = req.body

    const name = req.body.name
    const address = req.body.address
    const subject = req.body.subject
    const mobile = req.body.mobile
  
    const mail = {
      from: name,
      to: "info@hotelbhabha.com",// receiver email,
      subject: subject,
      html:`
      <p>Name: ${name}</p>
      <p>Mobile no: ${mobile}</p>
      <p>subject: ${subject}</p>
      <p>address: ${address}</p>
      `
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
}