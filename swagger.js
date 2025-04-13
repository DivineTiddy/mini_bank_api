const swaggerJsdoc = require("swagger-jsdoc");
// const usersRouter = require('./module/users/users.routes');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "mini bank API",
      version: "1.0.0",
      description: "Api documentation for mini bank",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "https",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
      {
        url: "https://mini-bank-api-1.onrender.com/",
        description: "Production server",
      },
      {
        url: "http://localhost:3000",
        description: "local server",
      },
    ],
  },
  apis: ["./module/swaggerApi.js"], // path to the route files with JSDoc comments
};
const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
