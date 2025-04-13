const mongoose = require("mongoose");
const validator = require("validator");

const loanMoney = async (req, res) => {
  const usersModel = mongoose.model("users");
  const transationModel = mongoose.model("transation");
  const { amount, remarks } = req.body;
   const userAccount = await usersModel.findOne({ _id: req.user._id});

  if (!amount) throw "Amount is required";
  if (!remarks) throw "Remarks is required";
  if (remarks.length < 5) throw "Remarks must be at least 5 characters";
  if (!validator.isNumeric(amount.toString()))
    throw "Amount must be a valid number";
  if (amount < 1) throw "Amount must be least then negative";

  const incomeData = transationModel.create({
    user_id: req.user._id,
    amount: amount,
    remarks: remarks,
    transation_type: "loan",
    email:userAccount.email
  });

    await usersModel.updateOne(
      {
        _id: req.user._id,
      },
      {
        $inc: {
          balance: amount,
        },
      }
    );


  res.status(200).json({
    message: "loan money Successfully",
    status: true,
  });
};
module.exports = loanMoney;
