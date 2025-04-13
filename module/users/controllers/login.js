const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const jwtManager = require("../../../manager/jwtManager");

const login = async (req, res) => {
  const usersModel = mongoose.model("users");
  const { email, password } = req.body;
  const userApprove = await usersModel.findOne({ email: email });
  if (!userApprove) throw "Email and password not match";
  if(!password) throw "Password is required";
  const comparePassword = await bcrypt.compare(password, userApprove.password);
  if (!comparePassword) throw "Email and password not match";

  const accessToken = jwtManager(userApprove)

  res.status(200).json({
    message: "login Successfully",
    status: true,
    accessToken: accessToken,
  });
};


module.exports = login;
