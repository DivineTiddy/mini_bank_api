const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const emailManager = require("../../../manager/emailManager");

const forgotPassword = async (req, res) => {
  const usersModel = mongoose.model("users");
  const { email } = req.body;
  if (!email) throw "Email must be provided";
  const getUser = await usersModel.findOne({ email: email });
  if (!getUser) throw "Email not found in our system";

  const rest_code = Math.floor(100000 + Math.random() * 900000);
  await usersModel.findOneAndUpdate(
    { email: email },
    { rest_code: rest_code },
    {
      runValidators: true,
    }
  );
  // Looking to send emails in production? Check out our Email API/SMTP product!

  await emailManager(
    email,
    `Your reset code is ${rest_code}`,
    `<h1>Your reset code is ${rest_code}</h1>`,
    "Reset your password"
  );

  res.status(200).json({
    message: "Rest code sent to email successfully",
    status: true,
  });
};
module.exports = forgotPassword;
