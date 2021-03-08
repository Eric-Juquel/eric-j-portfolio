const path = require("path")
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 5000


if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/build')))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'build', 'index.html')))
}

app.listen(PORT, () => console.log(`Server Running on port :${PORT}`));

const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com", //replace with  email provider
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
}
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject= req.body.subject;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "ericjuquel94@gmail.com",
      subject: subject,
    //   text: message
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        console.log('error',error)
        res.json({ status: "error" });
      } else {
        res.json({ status: "success" });
      }
    });
  });

