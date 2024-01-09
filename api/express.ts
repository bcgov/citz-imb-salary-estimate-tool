/**
 * @summary Middleware and configuration setup for SET Express API
 * @author  dallascrichmond
 */
import { keycloak, protectedRoute } from '@bcgov/citz-imb-kc-express';
import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import rateLimit from 'express-rate-limit';
import bodyParser from 'body-parser';
import * as config from './config';
import * as routers from './routes';
import * as middleware from './middleware';
import KEYCLOAK_OPTIONS from './config/keycloakConfig';

const app: Application = express();
app.use(bodyParser.json({limit: '35mb'}));

// Increases the size of the files that can be passed
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '35mb',
    parameterLimit: 50000,
  }),
);

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

app.use('/', routers.healthRouter);
app.use('/', protectedRoute(['admin', 'hm', 'shr', 'adm'], { requireAllRoles: false }), routers.userRouter);
app.use('/', protectedRoute(['admin', 'hm', 'shr', 'adm'], { requireAllRoles: false }), routers.salaryDataRouter);
app.use('/', protectedRoute(['admin', 'hm', 'shr', 'adm'], { requireAllRoles: false }), routers.inquiryRouter);
app.use('/', protectedRoute(['admin', 'hm', 'shr', 'adm'], { requireAllRoles: false }), routers.adminDataRouter);

// Integrate global error handler after routes to cover all ends.
app.use(middleware.globalErrorHandler);

export default app;
