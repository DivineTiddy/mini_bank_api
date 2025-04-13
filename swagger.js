const swaggerJsdoc = require('swagger-jsdoc');
// const usersRouter = require('./module/users/users.routes');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'mini bank API',
      version: '1.0.0',
      description: 'mini bank API',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./module/users/users.routes.js'], // path to the route files with JSDoc comments
  apis: ['./module/transation/transation.routes.js'], // path to the route files with JSDoc comments

};
const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
