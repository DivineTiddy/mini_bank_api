const mongoose = require("mongoose");

const userDashBoard = async (req, res) => {
  const usersModel = mongoose.model("users");
  const transationModel = mongoose.model("transation");

  const getUser = await usersModel
    .findOne({ _id: req.user._id })
    .select(" -password -__v -_id");

  const transation = await transationModel.find({ user_id: req.user._id }).sort("-createdAt");

  res.status(200).json({
    message: "successsful",
    status: true,
    data: getUser,
    transation,
  });
};

module.exports = userDashBoard;
