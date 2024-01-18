import { Request, Response } from 'express';
import { errorWrapper, httpStatusCode } from '../../utils';
import dataSource from '../../dataSource';

/**
 * Check if application is healthy.
 * @method GET
 * @route /health
 */
export const isHealthy = errorWrapper(async (req: Request, res: Response) => {
  res.send('Application is healthy!');
});

/**
 * Check if application has a connection to the database.
 * @method GET
 * @route /health/ready
 */
export const isReady = errorWrapper(async (req: Request, res: Response) => {
  // Indicates if DataSource was initialized and initial connection was established or not.
  const isInitialized = dataSource.isInitialized;
  if (!isInitialized)
    return res
      .status(httpStatusCode.SERVICE_UNAVAIBLABLE)
      .send('Database connection is unavailable.');

  res.send('Application and Database are ready!');
});
