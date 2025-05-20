const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwtManager = require("../../../manager/jwtManager");

const login = async (req, res) => {
  const usersModel = mongoose.model("users");
  const { email, password } = req.body;

  if (!email) throw "Email is required";
  if (!password) throw "Password is required";

  const userApprove = await usersModel.findOne({ email });
  if (!userApprove) throw "Email do not match";


  const comparePassword = await bcrypt.compare(password, userApprove.password);
  if (!comparePassword) throw "Password does not match";
    // Check if email is verified
  if (!userApprove.emailVerified) throw "Please verify your email before logging in";

  const accessToken = jwtManager(userApprove);

  res.status(200).json({
    message: "Login successful",
    status: true,
    accessToken,
  });
};

module.exports = login;
