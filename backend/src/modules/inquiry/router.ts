import express from 'express';
import type { EntitySchema } from 'typeorm';
import { dataSource } from '../../database/dataSource';
import { createController, createRepository, createService } from '../common';
import { Inquiry } from './entity';

const dataRepository = createRepository<Inquiry>(
  Inquiry as unknown as EntitySchema<Inquiry>,
  dataSource,
);

const dataService = createService<Inquiry>(dataRepository);

const dataController = createController<Inquiry>(dataService);

const router = express.Router();

router.get('/', dataController.getAllItems);

router.post('/', dataController.createItem);

router.patch('/:id', dataController.updateItem);

router.delete('/:id', dataController.deleteItem);

export default router;
