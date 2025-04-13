const express = require("express");

const auth = require("../../middleware/auth");
const loanMoney = require("./controllers/loanMoney");
const sentMoney = require("./controllers/sentMoney");
const transations = require("./controllers/transations");

const transationRouter = express.Router();

transationRouter.use(auth);

transationRouter.post("/loan", loanMoney);
transationRouter.post("/sent", sentMoney);
transationRouter.get("/", transations);

module.exports = transationRouter;
