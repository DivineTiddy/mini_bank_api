const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwtManager = require("../../../manager/jwtManager");
const emailManager = require("../../../manager/emailManager");

const register = async (req, res) => {
  const usersModel = mongoose.model("users");
  const { first_Name, last_Name, email, password, balance } = req.body;

  if (!first_Name) throw "Fist Name is required";
  if (!email) throw "Email is required";
  if (!password) throw "Password is required";
  if (password.length < 8) throw "Password must be atleast 8 character length";
  // if (!balance) throw "Balance is required";
  const duplicateEmail = await usersModel.findOne({ email: email });

  if (duplicateEmail) throw "Email already exists";
  const emailCode = Math.floor(100000 + Math.random() * 900000);

  const hashPassword = await bcrypt.hash(password, 10);
  const createUser = await usersModel.create({
    first_Name: first_Name,
    last_Name: last_Name,
    email: email,
    password: hashPassword,
    balance: balance,
    emailCode: emailCode,
  });
  const accessToken = jwtManager(createUser);

  // Looking to send emails in production? Check out our Email API/SMTP product!
  await emailManager(
     createUser.email,
  `Your code is ${emailCode}`, // plain text
  `<h1>Email Verification</h1><p>Your code is: <strong>${emailCode}</strong></p>`, // HTML
  "Verify Your Email - Mini Bank"
  );

  // await emailManager(createUser.email, "Welcome to Mini Bank you are successfully registered to our system", `<h1>Welcome to Mini Bank</h1><p>You are successfully registered to our system</p>` , "Welcome to Mini Bank")

  res.status(201).json({
    message: "Register Successfully",
    status: true,
    accessToken: accessToken,
    data: {
      first_Name: createUser.first_Name,
      last_Name: createUser.last_Name,
      email: createUser.email,
      balance: createUser.balance,
    },
  });
};

module.exports = register;
