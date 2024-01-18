import { EntitySchema } from 'typeorm';
import { Service } from './service.class';

export const createService = <TEntity>(entity: EntitySchema) => new Service<TEntity>(entity);
