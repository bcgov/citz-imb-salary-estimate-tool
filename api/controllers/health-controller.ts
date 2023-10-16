/**
 * @summary Health Endpoint Controller for SET
 * @author  LocalNewsTV, Dallascrichmond
 */
import { Request, Response } from 'express';

export const getHealth = async (req: Request, res: Response) => (
  res.status(200).send('SET API is healthy and ready')
);

export default getHealth;
