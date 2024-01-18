import { EntitySchema } from 'typeorm';
import { Repository } from './repository.class';

export type { Repository };

export const createRepository = <TEntity>(entity: EntitySchema<TEntity>) =>
  new Repository<TEntity>(entity);
