const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const emailManager = require("../../../manager/emailManager");

const resetPassword = async (req, res) => {
  const usersModel = mongoose.model("users");
  const { email, rest_code, new_password } = req.body;

  if (!email) throw "Email is required";
  if (!rest_code) throw "Reset code is required";
  if (!new_password) throw "New password is required";
  if (new_password.length < 8)
    throw "Password must be atleast 8 character length";

  const comfirmRestCode = await usersModel.findOne({
    email: email,
    rest_code: rest_code,
  });
  if (!comfirmRestCode) throw "Reset code not match";
  const hashPassword = await bcrypt.hash(new_password, 10);

  await usersModel.findOneAndUpdate(
    {
      email: email,
    },
    { password: hashPassword, rest_code: "" },
    {
      runValidators: true,
    }
  );
  await emailManager(
    email,
    "Your password has been changed successfully",
    `<h1>Your password has been changed successfully</h1>`,
    "Password Changed Successfully"
  );

  res.status(200).json({
    message: "Reset password successfully",
    status: true,
  });
};

module.exports = resetPassword;
