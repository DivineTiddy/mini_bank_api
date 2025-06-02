const mongoose = require("mongoose");

const user = async (req, res) => {
  const usersModel = mongoose.model("users");
  const { email } = req.body;
  const user = await usersModel.findOne({ email: email });
  res.status(200).json({
    message: "successsful",
    status: true,
    data: user.first_Name,
  });
};

module.exports = user;
