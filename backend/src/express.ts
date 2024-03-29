import { keycloak, protectedRoute } from '@bcgov/citz-imb-kc-express';
import express, { Application } from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { CORS_CONFIG, RATE_LIMIT_CONFIG } from '../config';
import { KEYCLOAK_OPTIONS } from './keycloak/keycloakConfig';
import {
  healthRouter,
  userRouter,
  ministryRouter,
  experienceRouter,
  classificationRouter,
  processRouter,
  appointmentRouter,
  salaryDataRouter,
  inquiryRouter,
} from './modules';

const app: Application = express();

/**
 * Middleware for parsing request bodies.
 * @module body-parser
 * @property {Function} urlencodedParser - Middleware for parsing URL-encoded data from the request body.
 * @property {Function} jsonParser - Middleware for parsing JSON data from the request body.
 */
app.use(
  express.urlencoded({
    extended: true,
    limit: '35mb',
    parameterLimit: 50000,
  }),
);
app.use(express.json({ limit: '35mb' }));
app.use(express.static('public'));

app.set('trust proxy', 1);

// Initializes Keycloak in the backend
keycloak(app, KEYCLOAK_OPTIONS);

// Express middleware
app.use(cors(CORS_CONFIG));
app.use(rateLimit(RATE_LIMIT_CONFIG));

app.disable('x-powered-by');

// Routing information
app.use('/health', healthRouter);

// Protected routes
app.use('/appointment', protectedRoute(), appointmentRouter);
app.use('/experience', protectedRoute(), experienceRouter);
app.use('/inquiry', protectedRoute(), inquiryRouter);
app.use('/ministry', protectedRoute(), ministryRouter);
app.use('/process', protectedRoute(), processRouter);
app.use('/salaryData', protectedRoute(), salaryDataRouter);
app.use('/classification', protectedRoute(), classificationRouter);
app.use('/user', protectedRoute(), userRouter);

export default app;
