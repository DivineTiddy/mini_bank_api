const express = require("express");
const register = require("./controllers/register");
const login = require("./controllers/login");
const userDashBoard = require("./controllers/userDashBoard");
const auth = require("../../middleware/auth");
const forgotPassword = require("./controllers/forgotPassword");
const resetPassword = require("./controllers/resetPassword");
const edit = require("./controllers/edit");

const usersRouter = express.Router();

/**
 * @swagger
 * /register:
 *   post:
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   password:
 *                     type: string
 *                   confirm_password:
 *                     type: string
 *                   balance:
 *                    type: number
 */

/**
 * @swagger
 * /login:
 *   post:
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *
 *                   email:
 *                     type: string
 *                   password:
 *                     type: string
 *
 */

/**
 * @swagger
 * /forgot:
 *   post:
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *
 *                   email:
 *                     type: string
 *                  
 *
 */
/**
 * @swagger
 * /reset:
 *   post:
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *
 *                   email:
 *                     type: string
 *                   password:
 *                     type: string
 *
 */
/**
 * @swagger
 * /dashboard:
 *   get:
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *
 *                   email:
 *                     type: string
 *                   balance:
 *                     type: number
 *                   transation:
 *                    type: array
 *
 */


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
