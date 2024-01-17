import { User } from './entity';
import dataSource from '../../dataSource';

/**
 * @returns An object with methods for performing CRUD operations on users.
 */
export const UserRepository = () => {
  const repository = dataSource.getRepository(User);

  // Retrieve user by where clause.
  const findUserWhere = async (where: object): Promise<User | null> => {
    return await repository.findOne({ where });
  };

  // Retrieve all users.
  const getAll = async (): Promise<User[]> => {
    return await repository.find();
  };

  // Creates a new user.
  const create = async (userData: Partial<User>): Promise<User> => {
    const user = repository.create(userData);
    return await repository.save(user);
  };

  // Updates an existing user.
  const update = async (guid: string, userData: Partial<User>): Promise<User | undefined> => {
    const user = await findUserWhere({ guid });
    if (!user) return undefined;
    Object.assign(user, userData);
    return await repository.save(user);
  };

  // Return an object with the defined methods.
  return {
    create,
    update,
    findUserWhere,
    getAll,
  };
};