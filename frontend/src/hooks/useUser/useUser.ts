/**
 * This hook is to specify the endpoint and the columns for the Admin page.
 * It is also the place to transform the data sent to or returned from the backend.
 */
import { useDataFactory } from '../useDataFactory/useData.Factory';
import { useTableFactory } from '../useTableFactory/useTable.Factory';
import { columnsUser } from './user.columns';
import { UserData } from '../../types';

export const useUser = (dataId: string = '') => {
  const endPoint = 'user';
  const userData = useDataFactory<UserData>({ endPoint, dataId });

  const UserTable = useTableFactory<UserData>({
    title: 'Users',
    rows: userData.data.map((user) => {
      return {
        ...user,
        id: user.guid,
      };
    }),
    columns: columnsUser,
  });

  return {
    ...userData,
    UserTable,
  };
};

export default useUser;
