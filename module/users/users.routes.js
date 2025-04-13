const express = require("express");
const register = require("./controllers/register");
const login = require("./controllers/login");
const userDashBoard = require("./controllers/userDashBoard");
const auth = require("../../middleware/auth");
const forgotPassword = require("./controllers/forgotPassword");
const resetPassword = require("./controllers/resetPassword");
const edit = require("./controllers/edit");

const usersRouter = express.Router();



// Auth routes
usersRouter.post("/forgot", forgotPassword);
usersRouter.post("/reset", resetPassword);
usersRouter.post("/register", register);
usersRouter.post("/login", login);

// Protected routes
usersRouter.use(auth);
usersRouter.patch("/", edit);
usersRouter.get("/dashboard", userDashBoard);

module.exports = usersRouter;
