import { GridValueGetterParams } from '@mui/x-data-grid';
import { RolesCell } from '@/components';
import { UseTableFactoryProps } from '@/hooks/factories';
import { UserData } from './User.d';

export const userTableConfig: UseTableFactoryProps<UserData> = {
  title: 'Users',
  columns: [
    { field: 'username', headerName: 'Login', width: 130 },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
    },
    {
      field: 'user_name',
      headerName: 'User Name',
      width: 200,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'roles',
      headerName: 'User Roles',
      width: 500,
      renderCell: (params) => <RolesCell value={params.value} />,
    },
  ],
};
