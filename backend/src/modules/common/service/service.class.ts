/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { EntitySchema, ObjectLiteral } from 'typeorm';
import type { Repository } from '../repository/repository.factory';

export class Service<TEntity> {
  getAllItems: () => Promise<EntitySchema<TEntity>[]>;

  createItem: (item: TEntity) => Promise<EntitySchema<TEntity>>;

  updateItem: (id: string, item: TEntity) => Promise<EntitySchema<TEntity> | undefined>;

  deleteItem: (id: string) => Promise<void>;

  constructor(private repository: Repository<TEntity>) {
    this.getAllItems = async () => {
      return this.repository.getAllItems();
    };

    this.createItem = async (item: TEntity) => {
      return this.repository.createItem(item as unknown as EntitySchema<TEntity>);
    };

    this.updateItem = async (id: string, item: TEntity) => {
      return this.repository.updateItem(id, item as unknown as EntitySchema<TEntity>);
    };

    this.deleteItem = async (id: string) => {
      return this.repository.deleteItem(id);
    };
  }
}
