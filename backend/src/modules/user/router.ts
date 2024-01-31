import express from 'express';
import { dataSource } from '../../database/dataSource';
import { createController, createRepository, createService } from '../common';
import { User } from './entity';

import type { EntitySchema } from 'typeorm';

export const dataRepository = createRepository<User>(
  User as unknown as EntitySchema<User>,
  dataSource,
);

const dataService = createService<User>(dataRepository);

const dataController = createController<User>(dataService);

const router = express.Router();

router.get('/all', dataController.getAllItems);

router.get('/guid/:guid', dataController.getItemByWhere);

router.patch('/guid/:guid', dataController.updateItem);

export default router;
