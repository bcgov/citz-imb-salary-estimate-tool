/**
 * This hook is to specify the endpoint and the columns for the Admin page.
 * It is also the place to transform the data sent to or returned from the backend.
 */
import { useDataFactory } from '../useDataFactory/useData.Factory';
import { columnsUser } from './user.columns';
import { UserData } from '../../types';

export const useUser = () => {
  const endPoint = 'user';
  const title = 'Users';

  const dataTransformer = (items: UserData[]) =>
    items.map((item) => {
      return { ...item, id: item.guid };
    });

  const userData = useDataFactory<UserData>({
    endPoint,
    title,
    tableColumns: columnsUser,
    dataTransformer,
    showDeleteRow: false,
  });

  return {
    UserTable: userData.DataTable,
  };
};

export default useUser;
