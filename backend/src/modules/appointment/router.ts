import express from 'express';
import type { EntitySchema } from 'typeorm';
import dataSource from '../../dataSource';
import { createController, createRepository, createService } from '../common';
import { Appointment } from './entity';

const dataRepository = createRepository<Appointment>(
  Appointment as unknown as EntitySchema<Appointment>,
  dataSource,
);

const dataService = createService<Appointment>(dataRepository);

const dataController = createController<Appointment>(dataService);

const router = express.Router();

router.get('/', dataController.getAllItems);

router.post('/', dataController.createItem);

router.patch('/:id', dataController.updateItem);

router.delete('/:id', dataController.deleteItem);

export default router;
