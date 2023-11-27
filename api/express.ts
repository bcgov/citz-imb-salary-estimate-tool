/**
 * @summary Middleware and configuration setup for SET Express API
 * @author  dallascrichmond
 */
import { keycloak } from '@bcgov/citz-imb-kc-express';
import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import rateLimit from 'express-rate-limit';
import * as config from './config';
import * as routers from './routes';
import * as middleware from './middleware';
import KEYCLOAK_OPTIONS from './config/keycloakConfig';

const app: Application = express();

app.set("trust proxy", 1);

// Initializes Keycloak in the backend
keycloak(app, KEYCLOAK_OPTIONS);

// Express middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));
app.use(cors(config.cors));
app.use(rateLimit(config.rateLimitConfig));

app.disable('x-powered-by');

// Routing information
app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(
    swaggerJSDoc(config.swaggerConfig),
  ),
);

// TODO: import and add protectedRoute to inquiry endpoint when roles are defined 
app.use('/', routers.healthRouter);
app.use('/', routers.inquiryRouter);
app.use('/', routers.userRouter);
app.use('/', routers.salaryDataRouter);

// Integrate global error handler after routes to cover all ends.
app.use(middleware.globalErrorHandler);

export default app;
