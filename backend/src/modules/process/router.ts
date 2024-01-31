import express from 'express';
import type { EntitySchema } from 'typeorm';
import { dataSource } from '../../database/dataSource';
import { createController, createRepository, createService } from '../common';
import { Process } from './entity';

const dataRepository = createRepository<Process>(
  Process as unknown as EntitySchema<Process>,
  dataSource,
);

const dataService = createService<Process>(dataRepository);

const dataController = createController<Process>(dataService);

const router = express.Router();

router.get('/', dataController.getAllItems);

router.post('/', dataController.createItem);

router.patch('/:id', dataController.updateItem);

router.delete('/:id', dataController.deleteItem);

export default router;
