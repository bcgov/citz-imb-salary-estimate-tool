/* eslint-disable no-unused-vars */
import { EntitySchema, Repository as ORMRepository } from 'typeorm';
import dataSource from '../../../dataSource';

export class Repository<TEntity> {
  private repository: ORMRepository<EntitySchema<TEntity>>;

  getAllItems: () => Promise<EntitySchema<TEntity>[]>;

  constructor(entity: EntitySchema) {
    this.repository = dataSource.getRepository(entity);

    this.getAllItems = async () => await this.repository.find();
  }
}
