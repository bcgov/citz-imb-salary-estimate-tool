/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { EntitySchema } from 'typeorm';
import { Repository, createRepository } from './repository.factory';

export class Service<TEntity> {
  private repository: Repository<TEntity>;

  getAllItems: () => Promise<TEntity[]>;

  constructor(entity: EntitySchema) {
    this.repository = createRepository<TEntity>(entity);

    this.getAllItems = async () => {
      return Promise.resolve([]);
    };
  }
}
