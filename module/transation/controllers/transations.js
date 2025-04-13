const mongoose = require("mongoose");

const transations = async (req, res) => {
  const transationModel = mongoose.model("transation");
  const transation = await transationModel.find({
    user_id: req.user._id,
    ...req.query,
  });

  res.status(200).json({
    message: "success",
    status: true,
    data: transation,
  });
};

module.exports = transations;
