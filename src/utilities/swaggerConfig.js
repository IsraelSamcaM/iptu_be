import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'IPTU API Documentation',
    version: '1.0.0',
    description: 'API documentation for the backend of the IPTU project',
  },
  servers: [
    {
      url: 'http://localhost:4000/',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/utilities/documentation/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
