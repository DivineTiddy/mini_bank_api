const mongoose = require("mongoose");

const user = async (req, res) => {
  const usersModel = mongoose.model("users");
  const { email } = req.query;
  const foundUser = await usersModel.findOne({ email:email });
  if (!foundUser) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({
    message: "successsful",
    status: true,
    data: foundUser.first_Name,
  });
};

module.exports = user;
