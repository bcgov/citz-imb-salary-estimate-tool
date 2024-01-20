import express from 'express';
import type { EntitySchema } from 'typeorm';
import dataSource from '../../dataSource';
import { createController, createRepository, createService } from '../common';
import { Ministry } from './entity';

const dataRepository = createRepository<Ministry>(
  Ministry as unknown as EntitySchema<Ministry>,
  dataSource,
);

const dataService = createService<Ministry>(dataRepository);

const dataController = createController<Ministry>(dataService);

const router = express.Router();

router.get('/', dataController.getAllItems);

router.post('/', dataController.createItem);

router.patch('/:id', dataController.updateItem);

router.delete('/:id', dataController.deleteItem);

export default router;
