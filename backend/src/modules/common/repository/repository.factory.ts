import { DataSource, EntitySchema } from 'typeorm';
import { Repository } from './repository.class';

export type { Repository };

export const createRepository = <TEntity>(entity: EntitySchema<TEntity>, dataSource: DataSource) =>
  new Repository<TEntity>(entity, dataSource);
