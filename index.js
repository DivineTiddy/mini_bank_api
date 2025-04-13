require("express-async-errors");

const express = require("express");
const cors = require("cors");
const errorHandler = require("./handlers/errorsHandler");
const mongoose = require("mongoose");
const usersRouter = require("./module/users/users.routes");
const transationRouter = require("./module/transation/transation.routes");
require("dotenv").config();
const app = express();
app.use(cors());
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

mongoose
  .connect(process.env.MONGODB_URL, {})
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("connection failed");
  });
require("./models/transation.model");
require("./models/users.model");
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/transation", transationRouter);

app.use(errorHandler);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.all("*", (req, res) => {
  res.status(404).json({
    message: "Route not found",
    status: "failed",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
