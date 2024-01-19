import express from 'express';
import type { EntitySchema } from 'typeorm';
import dataSource from '../../dataSource';
import { createController } from '../common/controller/controller.factory';
import { createRepository } from '../common/repository/repository.factory';
import { createService } from '../common/service/service.factory';
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
