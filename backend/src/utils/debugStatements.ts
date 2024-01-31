import { Request } from 'express';
import * as c from './colors';

const { DEBUG, VERBOSE_DEBUG } = process.env;

export const debugRequest = (req: Request) => {
  // Set method color.
  const method = req.method;
  let methodText = req.method;
  if (method === 'GET' || method === 'POST') methodText = `${c.Lime}${methodText}${c.Reset}`;
  else if (method === 'PUT' || method === 'PATCH')
    methodText = `${c.Yellow}${methodText}${c.Reset}`;
  else if (method === 'DELETE') methodText = `${c.Red}${methodText}${c.Reset}`;

  // DEBUG.
  if (DEBUG) console.info(`DEBUG: Request made to [${methodText}] ${req.originalUrl}`);

  // VERBOSE DEBUG.
  if (VERBOSE_DEBUG) {
    console.info(`  Request query: ${JSON.stringify(req.query)}`);
    console.info(`  Request body:`, req.body);
  }
};
