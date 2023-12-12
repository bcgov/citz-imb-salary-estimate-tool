import { useUser } from '../../hooks';
import { TableContainer } from './TableContainer';
import { Loading } from '../loading/Loading';
import { ErrorDialog } from '../dialogs/ErrorDialog/ErrorDialog';

export const UserTableContainer = () => {
  const { data, columns, isLoading, isError, error } = useUser();

  if (isLoading) return <Loading />;

  if (isError) return <ErrorDialog error={error} />;

  return (
    <TableContainer
      rows={data}
      columns={columns}
      tableName="Users"
      getRowId={(row) => row.guid}
    />
  );
};

export default UserTableContainer;
