/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { ZodError, z } from 'zod';
import { httpStatusCode } from './httpStatusCode';
import { HttpError } from './HttpError';

export const getQuery = (req: Request, schema: z.ZodSchema<unknown>): any => {
  try {
    // Use Zod schema to parse and validate the query parameters
    return schema.parse(req.query);
  } catch (error) {
    if (error instanceof ZodError) {
      // If validation fails, throw an error with detailed information
      throw new HttpError(
        `Request is malformed. Invalid query parameters: ${error.errors.map((e) => e.message).join(', ')}`,
        httpStatusCode.BAD_REQUEST,
      );
    }
    // For unexpected errors, rethrow them
    throw error;
  }
};
