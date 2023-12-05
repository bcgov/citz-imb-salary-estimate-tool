/**
 * This file contains the columns for the User table.
 * it also provides the renderCell function for the StatusCell and DateCell components
 * and other options for the columns.
 *
 * see https://mui.com/components/data-grid/columns/ for more information
 *
 */
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { RolesCell } from '../../components';

export const columnsUser: GridColDef[] = [
  { field: 'username', headerName: 'Login', width: 130 },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
  },
  {
    field: 'user_name',
    headerName: 'User Name',
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.user_first_name || ''} ${params.row.user_last_name || ''}`,
  },
  {
    field: 'roles',
    headerName: 'User Roles',
    width: 130,
    renderCell: (params) => <RolesCell value={params.value} />,
  },
];

export default columnsUser;
