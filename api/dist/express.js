"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @summary Middleware and configuration setup for SET Express API
 * @author  LocalNewsTV, Dallascrichmond
 */
// import './db';
const express_1 = __importDefault(require("express"));
// import passport from 'passport';
// import swaggerUi from 'swagger-ui-express';
// import swaggerJSDoc from 'swagger-jsdoc';
// import rateLimit from 'express-rate-limit';
// import * as config from './config';
const routers = __importStar(require("./routes"));
const middleware = __importStar(require("./middleware"));
const app = (0, express_1.default)();
// Express middleware
// app.use(morgan('tiny'));
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
// app.use(cors(config.cors));
// app.use(rateLimit(config.rateLimitConfig));
// app.use(passport.initialize());
app.disable('x-powered-by');
// Routing information
// app.use(
//   '/api/api-docs',
//   swaggerUi.serve,
//   swaggerUi.setup(
//     swaggerJSDoc(config.swaggerConfig),
//   ),
// );
app.use('/api', [
    routers.healthRouter,
]);
// Integrate global error handler after routes to cover all ends.
app.use(middleware.globalErrorHandler);
exports.default = app;
