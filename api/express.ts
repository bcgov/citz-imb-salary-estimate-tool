/**
 * @summary Middleware and configuration setup for SET Express API
 * @author  dallascrichmond
 */
import { keycloak, protectedRoute } from '@bcgov/citz-imb-kc-express';
import express, { Application, NextFunction, RequestHandler } from 'express';
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
import constants from './constants';

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

console.log('TESTING: ', constants.TESTING);

// Routing Protected Routes
// Pass the request through with no protection (for testing)
const falseProtect: unknown = (req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-next-line no-console
  console.warn('Keycloak is off');
  next();
};

app.use('/health', routers.healthRouter);
app.use('/user', constants.TESTING ? falseProtect as RequestHandler : protectedRoute(['admin', 'hm', 'shr', 'adm'], { requireAllRoles: false }), routers.userRouter);
app.use('/salary', constants.TESTING ? falseProtect as RequestHandler : protectedRoute(['admin', 'shr'], { requireAllRoles: false }), routers.salaryDataRouter);
app.use('/inquiry', constants.TESTING ? falseProtect as RequestHandler : protectedRoute(['admin', 'hm', 'shr', 'adm'], { requireAllRoles: false }), routers.inquiryRouter);
app.use('/', constants.TESTING ? falseProtect as RequestHandler : protectedRoute(['admin', 'hm', 'shr', 'adm'], { requireAllRoles: false }), routers.adminDataRouter);

// Integrate global error handler after routes to cover all ends.
app.use(middleware.globalErrorHandler);

export default app;
