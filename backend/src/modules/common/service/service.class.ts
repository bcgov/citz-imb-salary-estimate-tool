/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { EntitySchema } from 'typeorm';
import { Repository, createRepository } from './repository.factory';

export class Service<TEntity> {
  private repository: Repository<TEntity>;

  getAllItems: () => Promise<EntitySchema<TEntity>[]>;

  createItem: (item: TEntity) => Promise<EntitySchema<TEntity>>;

  updateItem: (id: string, item: TEntity) => Promise<EntitySchema<TEntity> | undefined>;

  constructor(entity: EntitySchema) {
    this.repository = createRepository<TEntity>(entity);

    this.getAllItems = async () => {
      return this.repository.getAllItems();
    };

    this.createItem = async (item: TEntity) => {
      return this.repository.createItem(item as unknown as EntitySchema<TEntity>);
    };

    this.updateItem = async (id: string, item: TEntity) => {
      return this.repository.updateItem(id, item as unknown as EntitySchema<TEntity>);
    };
  }
}
