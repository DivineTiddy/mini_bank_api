const mongoose = require("mongoose");

const transationSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    transation_type: {
      type: String,
      required: true,
      enum: ["loan", "sent"],
    },
    remarks: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const transationModel = mongoose.model("transation", transationSchema);

module.exports = transationModel;
