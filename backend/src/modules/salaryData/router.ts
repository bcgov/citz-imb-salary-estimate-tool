import express from 'express';
import type { EntitySchema } from 'typeorm';
import { dataSource } from '../../database/dataSource';
import { createController, createRepository, createService } from '../common';
import { SalaryData } from './entity';

const dataRepository = createRepository<SalaryData>(
  SalaryData as unknown as EntitySchema<SalaryData>,
  dataSource,
);

const dataService = createService<SalaryData>(dataRepository);

const dataController = createController<SalaryData>(dataService);

const router = express.Router();

router.get('/', dataController.getAllItems);

router.post('/', dataController.createItems);

router.patch('/:id', dataController.updateItem);

router.delete('/:id', dataController.deleteItem);

export default router;
