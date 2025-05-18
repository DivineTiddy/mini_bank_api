const nodemailer = require("nodemailer");

const emailManager = async (to, text, html, subject) => {
  // Looking to send emails in production? Check out our Email API/SMTP product!
  var transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "divinetidy@gmail.com",
      pass: "judz bakb adrn ncdi",
    },
  });
  await transport.sendMail({
    to: to,
    from: "divinetidy@gmail.com",
    text: text,
    html: html,
    subject: subject,
  });
};

module.exports = emailManager;
