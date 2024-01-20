import express from 'express';
import type { EntitySchema } from 'typeorm';
import dataSource from '../../dataSource';
import { createController, createRepository, createService } from '../common';
import { Experience } from './entity.class';

const dataRepository = createRepository<Experience>(
  Experience as unknown as EntitySchema<Experience>,
  dataSource,
);

const dataService = createService<Experience>(dataRepository);

const dataController = createController<Experience>(dataService);

const router = express.Router();

router.get('/', dataController.getAllItems);

router.post('/', dataController.createItem);

router.patch('/:id', dataController.updateItem);

router.delete('/:id', dataController.deleteItem);

export default router;
