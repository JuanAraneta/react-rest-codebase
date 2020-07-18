import { Router } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerRouter = Router();
// Swagger set up
const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Express rest app codabase',
      version: '1.0.0',
      description: 'This is my express codebase project.',
      license: {
        name: 'MIT',
        url: 'https://choosealicense.com/licenses/mit/'
      }
    },
    servers: [
      {
        url: 'http://localhost:5000/'
      }
    ]
  },
  apis: ['models/user.js', 'routes/user/login.js']
};
const specs = swaggerJsdoc(options);
swaggerRouter.use('/', swaggerUi.serve);
swaggerRouter.get(
  '/',
  swaggerUi.setup(specs, {
    explorer: true
  })
);

export default swaggerRouter;
