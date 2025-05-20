const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    first_Name: {
      type: String,
      required: [true, " first name is required"],
    },
    last_Name: {
      type: String,
      required: [true, "last name is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    balance: {
      type: Number,
      required: [true, "Balance is required"],
      default: 0,
    },
    rest_code: {
      type: Number,
    },
    emailCode: { type: Number },
    emailVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", usersSchema);

module.exports = userModel;
