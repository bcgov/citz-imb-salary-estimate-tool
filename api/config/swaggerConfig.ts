/**
 * @summary -Swagger configuration for Express API
 *          -Gathers all *.yaml files in public folder
 * @author  dallascrichmond
 */
const swaggerConfig = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Salary Estimate Tool',
        version: '1.0.0',
        description: 'Documentation for the Salary Estimate Tool API',
      },
      servers: [{ url: '/api' }],
    },
    apis: ['./public/**/*.yaml'],
  };
  
export default swaggerConfig;
