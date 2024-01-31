/**
 * This hook is to specify the endpoint and the columns for the Admin page.
 * It is also the place to transform the data sent to or returned from the backend.
 */
import { useDataFactory } from '@/hooks/useDataFactory/useData.Factory';
import { columnsUser } from './user.columns';
import { UserData } from '@/types';

export const useUser = () => {
  const endPoint = 'user/all';
  const title = 'Users';

  const userData = useDataFactory<UserData>({
    endPoint,
    title,
    tableColumns: columnsUser,
    showDeleteRow: false,
  });

  return {
    UserTable: userData.DataTable,
  };
};

export default useUser;
