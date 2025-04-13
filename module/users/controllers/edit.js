const mongoose = require("mongoose");

const edit = async (req, res) => {
  const usersModel = mongoose.model("users");
   

  res.status(200).json({
    message: "Edit user successfully",
    status: true,
  });
};

module.exports = edit;
