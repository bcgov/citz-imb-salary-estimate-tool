import { Service } from '../service/service.class';
import { Controller } from './controller.class';

export const createController = <TEntity>(service: Service<TEntity>) => new Controller(service);
