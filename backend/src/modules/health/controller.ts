import { Request, Response } from 'express';
import { errorWrapper } from '../../utils';
import dataSource from '../../dataSource';

const { DEBUG } = process.env;

/**
 * Check if application is healthy.
 * @method GET
 * @route /health
 */
export const isHealthy = errorWrapper(async (req: Request, res: Response) => {
  if (DEBUG) console.info('DEBUG: isHealthy controller in modules/health called.');
  res.send('Application is healthy!');
});

/**
 * Check if application has a connection to the database.
 * @method GET
 * @route /health/ready
 */
export const isReady = errorWrapper(async (req: Request, res: Response) => {
  if (DEBUG) console.info('DEBUG: isReady controller in modules/health called.');
  // Indicates if DataSource was initialized and initial connection was established or not.
  const isInitialized = dataSource.isInitialized;
  if (!isInitialized) {
    res.status(503).send('Database connection is unavailable.');
    return;
  }
  res.send('Application is ready!');
});
