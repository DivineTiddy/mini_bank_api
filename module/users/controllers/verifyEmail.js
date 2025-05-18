const mongoose = require("mongoose");

const verifyEmail = async (req, res) => {
  const usersModel = mongoose.model("users");
  const { emailCode , email } = req.body;

  if (!emailCode) throw "Verify code is required";
  if(!email) throw "Email is required";

 const user = await usersModel.findOne({ email, emailCode });

  if (!user) throw "Verify code is incorrect";

  // Update verification status
  await usersModel.findOneAndUpdate(
    { email },
    { emailVerified: true, emailCode: "" },
    { runValidators: true }
  );

  res.status(200).json({
    message: "Email verified successfully",
    status: true,
  });
};

module.exports = verifyEmail;
