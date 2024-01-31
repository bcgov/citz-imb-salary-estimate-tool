import { Service } from './service.class';
import type { Repository } from '../repository/repository.class';

export type { Service };

export const createService = <TEntity>(repository: Repository<TEntity>) =>
  new Service<TEntity>(repository);
