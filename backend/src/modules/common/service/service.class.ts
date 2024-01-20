/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { EntitySchema } from 'typeorm';
import type { Repository } from '../repository/repository.factory';

interface IFormattedResponse<TEntity> {
  data: TEntity | TEntity[] | undefined;
}
export class Service<TEntity> {
  private formatResponse = <TEntity>(
    body: TEntity | TEntity[] | undefined,
  ): IFormattedResponse<TEntity> => {
    return {
      data: body,
    };
  };

  getAllItems: () => Promise<IFormattedResponse<TEntity>>;

  getItemById: (id: string) => Promise<IFormattedResponse<TEntity>>;

  getItemByWhere: (where: object) => Promise<IFormattedResponse<TEntity>>;

  createItem: (item: TEntity) => Promise<IFormattedResponse<TEntity>>;

  updateItem: (id: string, item: TEntity) => Promise<IFormattedResponse<TEntity>>;

  deleteItem: (id: string) => Promise<IFormattedResponse<TEntity>>;

  constructor(private repository: Repository<TEntity>) {
    this.getAllItems = async () => {
      const response = await this.repository.getAllItems();
      return this.formatResponse<TEntity>(response as TEntity[]);
    };

    this.getItemById = async (id: string) => {
      const response = await this.repository.getItemById(id);
      return this.formatResponse<TEntity>(response as TEntity);
    };

    this.getItemByWhere = async (where: object) => {
      const response = await this.repository.getItemByWhere(where);
      return this.formatResponse<TEntity>(response as TEntity);
    };

    this.createItem = async (item: TEntity) => {
      const response = this.repository.createItem(item as unknown as EntitySchema<TEntity>);
      return this.formatResponse<TEntity>(response as TEntity);
    };

    this.updateItem = async (id: string, item: TEntity) => {
      const response = this.repository.updateItem(id, item as unknown as EntitySchema<TEntity>);
      return this.formatResponse<TEntity>(response as TEntity);
    };

    this.deleteItem = async (id: string) => {
      const response = this.repository.deleteItem(id);
      return this.formatResponse<TEntity>(response as TEntity);
    };
  }
}
