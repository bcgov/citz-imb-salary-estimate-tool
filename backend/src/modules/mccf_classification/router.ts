import express from 'express';
import type { EntitySchema } from 'typeorm';
import { dataSource } from '../../database/dataSource';
import { createController, createRepository, createService } from '../common';
import { MCCF_Classification } from './entity';

const dataRepository = createRepository<MCCF_Classification>(
  MCCF_Classification as unknown as EntitySchema<MCCF_Classification>,
  dataSource,
);

const dataService = createService<MCCF_Classification>(dataRepository);

const dataController = createController<MCCF_Classification>(dataService);

const router = express.Router();

router.get('/', dataController.getAllItems);

router.post('/', dataController.createItem);

router.patch('/:id', dataController.updateItem);

router.delete('/:id', dataController.deleteItem);

export default router;
