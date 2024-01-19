/* eslint-disable no-unused-vars */
import { EntitySchema, Repository as ORMRepository } from 'typeorm';
import dataSource from '../../../dataSource';

export class Repository<TEntity> {
  private repository: ORMRepository<EntitySchema<TEntity>>;

  getAllItems: () => Promise<EntitySchema<TEntity>[]>;

  createItem: (item: EntitySchema<TEntity>) => Promise<EntitySchema<TEntity>>;

  updateItem: (
    id: string,
    item: EntitySchema<TEntity>,
  ) => Promise<EntitySchema<TEntity> | undefined>;

  deleteItem: (id: string) => Promise<void>;

  constructor(entity: EntitySchema) {
    this.repository = dataSource.getRepository(entity);

    this.getAllItems = async () => await this.repository.find();

    this.createItem = async (item) => await this.repository.save(item);

    this.updateItem = async (id, item) => {
      const existingItem = await this.repository.findOne({ where: { id } } as object);
      if (!existingItem) return undefined;
      Object.assign(existingItem, item);
      return await this.repository.save(existingItem);
    };

    this.deleteItem = async (id) => {
      await this.repository.delete(id);
    };
  }
}
