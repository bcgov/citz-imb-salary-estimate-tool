/**
 * This hook is to specify the endpoint and the columns for the Admin page.
 * It is also the place to transform the data sent to or returned from the backend.
 */
import { useDataFactory } from '../useDataFactory/useData.Factory';
import { columnsUser } from './user.columns';
import { UserData } from '../../types';

export const useUser = (dataId: string = '') => {
  const endPoint = 'user';
  const userData = useDataFactory<UserData>({ endPoint, dataId });

  return {
    ...userData,
    columns: columnsUser,
  };
};

export default useUser;
