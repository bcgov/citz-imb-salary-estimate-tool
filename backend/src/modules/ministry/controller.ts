import { Request, Response } from 'express';
import { EntitySchema } from 'typeorm';
import { httpStatusCode, errorWrapper } from '../../utils';
import { Ministry } from './entity';
import { createService } from '../common/service/service.factory';

/**
 * @method GET
 * @route /ministry/all
 */
export const getAllMinistries = errorWrapper(async (req: Request, res: Response) => {
  const ministryService = createService<Ministry>(Ministry as unknown as EntitySchema);

  const ministries = await ministryService.getAllItems();

  if (ministries.length === 0) return res.status(httpStatusCode.NO_CONTENT).json(ministries);

  res.status(httpStatusCode.OK).json(ministries);
});

/**
 * @method POST
 * @route /ministry
 */
export const createMinistry = errorWrapper(async (req: Request, res: Response) => {
  const ministryService = createService<Ministry>(Ministry as unknown as EntitySchema);

  const ministry = await ministryService.createItem(req.body);

  res.status(httpStatusCode.CREATED).json(ministry);
});

/**
 * @method PUT
 * @route /ministry/:id
 */
export const updateMinistry = errorWrapper(async (req: Request, res: Response) => {
  const ministryService = createService<Ministry>(Ministry as unknown as EntitySchema);

  const ministry = await ministryService.updateItem(req.params.id, req.body);

  if (!ministry)
    return res.status(httpStatusCode.BAD_REQUEST).json({ message: 'Ministry not found' });

  res.status(httpStatusCode.OK).json(ministry);
});
