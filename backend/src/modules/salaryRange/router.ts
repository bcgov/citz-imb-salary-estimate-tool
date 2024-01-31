import express from 'express';
import type { EntitySchema } from 'typeorm';
import { dataSource } from '../../database/dataSource';
import { createController, createRepository, createService } from '../common';
import { SalaryRange } from './entity';

const dataRepository = createRepository<SalaryRange>(
  SalaryRange as unknown as EntitySchema<SalaryRange>,
  dataSource,
);

const dataService = createService<SalaryRange>(dataRepository);

const dataController = createController<SalaryRange>(dataService);

const router = express.Router();

router.get('/', dataController.getAllItems);

router.post('/', dataController.createItem);

router.patch('/:id', dataController.updateItem);

router.delete('/:id', dataController.deleteItem);

export default router;
