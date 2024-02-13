/**
 * This hook is to specify the endpoint and the columns for the Admin page.
 * It is also the place to transform the data sent to or returned from the backend.
 */
import { useDataFactory, useTableFactory } from '@/hooks/factories';
import { UserData } from './User.d';
import { userDataConfig } from './user.data.config';
import { userFormConfig } from './user.form.config';
import { userTableConfig } from './user.table.config';

export const useUser = () => {
  const data = useDataFactory<UserData>(userDataConfig);

  const tableConfig = {
    rows: data.items,
    forms: { ...userFormConfig },
    ...userTableConfig,
  };

  const Table = useTableFactory<UserData>(tableConfig);

  return { Table };
};

export default useUser;
