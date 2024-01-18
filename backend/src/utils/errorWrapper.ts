import { Request, Response, NextFunction } from 'express';
import { HttpError } from './HttpError';
import { httpStatusCode } from './httpStatusCode';
import { debugRequest } from './debugStatements';

// eslint-disable-next-line no-unused-vars
type ExpressHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>;

/**
 * Wraps a route handler (controller) function with error handling logic.
 * @param {ExpressHandler} handler - The route handler (controller) function to wrap.
 * @returns {Promise<void>} A new middleware function that wraps the route handler in a try-catch block.
 */
export const errorWrapper = (handler: ExpressHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      debugRequest(req);

      // Execute the request logic.
      await handler(req, res, next);
    } catch (error: unknown) {
      const { method, originalUrl } = req;
      let statusCode = httpStatusCode.INTERNAL_SERVER_ERROR,
        message = 'An unexpected error occurred.';

      if (error instanceof HttpError) {
        statusCode = error.statusCode;
        message = error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }

      // Log the error to the console.
      console.error(`REQUEST ERROR: [${method}] ${originalUrl}: ${message}`);

      // Send response back to the client.
      res.status(statusCode).json({
        method,
        originalUrl,
        message,
      });
    }
  };
};
