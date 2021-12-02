let nodemailer = require("nodemailer");
let AWS = require("aws-sdk");

// create Nodemailer SES transporter
let transporter = nodemailer.createTransport({
  SES: new AWS.SES({
    apiVersion: "2010-12-01",
  }),
});

const SendMail = async (to, subject, template) => {
  try {
    await transporter.sendMail({
      from: "no-reply@realium.net",
      to,
      subject,
      html: template,
    });
  } catch (err) {
    console.error(err);
  }
};

export default SendMail;
