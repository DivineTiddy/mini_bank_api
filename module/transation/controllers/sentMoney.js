const mongoose = require("mongoose");
const validator = require("validator");

const sentMoney = async (req, res) => {
  const usersModel = mongoose.model("users");
  const transationModel = mongoose.model("transation");
  const { amount, remarks, email } = req.body;
  const userAccount = await usersModel.findOne({ email: email });
  const adminAccount = await usersModel.findOne({ _id: req.user._id });
  if (!amount) throw "Amount is required";
  if (!remarks) throw "Remarks is required";
  if (!email) throw "email is required";
  if (!userAccount) throw "Account not found";
  if (email === adminAccount.email ) throw "Invalid email";

  if (remarks.length < 2) throw "Remarks must be at least 5 characters";
  if (!validator.isNumeric(amount.toString()))
    throw "Amount must be a valid number";
  if (amount < 1) throw "Amount must be least then negative";
    if (amount > adminAccount.balance) throw "insuficient balance";
  transationModel.create({
    user_id: req.user._id,
    amount: amount,
    remarks: remarks,
    transation_type: "sent",
    email: email,
    to: userAccount.first_Name,
  });

  // Create transaction for receiver
  await transationModel.create({
    user_id: userAccount._id,
    amount: amount,
    remarks: remarks,
    transation_type: "receive",
    email: adminAccount.email,
    from: adminAccount.first_Name,
  });

  await usersModel.updateOne(
    {
      _id: req.user._id,
    },
    {
      $inc: {
        balance: amount * -1,
      },
    }
  );

  userAccount.balance += amount;

  await userAccount.save();

  res.status(200).json({
    message: "sent money Successfully",
    status: true,
  });
};
module.exports = sentMoney;
