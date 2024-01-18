import { Request } from 'express';

const { DEBUG } = process.env;

export const debugRequest = (req: Request) => {
  if (DEBUG) console.info(`DEBUG: Request made to [${req.method}] ${req.originalUrl}`);
};
