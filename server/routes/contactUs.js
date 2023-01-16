const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jwack624@gmail.com",
    pass: "iaodyjpaxllacxdz",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send Email bro");
  }
});

router.post("/contactUs", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: email,
    to: "jwack624@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${firstName} ${lastName}</p>
        <p>Email : ${email}</p>
        <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent boi" });
    }
  });
});

module.exports = router;
