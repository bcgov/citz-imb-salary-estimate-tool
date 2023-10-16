/**
 * @summary CORS Configuration for Express API
 * @author  LocalNewsTV, Dallascrichmond
 */
const corsConfig = {
    origin: [
      'http://localhost:5173',
      'http://localhost:4173',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: true,
    optionsSuccessStatus: 204,
  };
  
  export default corsConfig;
  