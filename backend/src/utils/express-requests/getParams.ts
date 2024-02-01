/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { HttpError } from './HttpError';
import { httpStatusCode } from './httpStatusCode';
import { ZodError, z } from 'zod';

export const getParams = (req: Request, schema: z.ZodSchema<unknown>): any => {
  try {
    // Use Zod schema to parse and validate the path parameters
    return schema.parse(req.params);
  } catch (error) {
    if (error instanceof ZodError) {
      // If validation fails, throw an error with detailed information
      throw new HttpError(
        `Request is malformed. Invalid path parameters: ${error.errors.map((e) => e.message).join(', ')}`,
        httpStatusCode.BAD_REQUEST,
      );
    }
    // For unexpected errors, rethrow them
    throw error;
  }
};
