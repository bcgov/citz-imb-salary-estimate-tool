/**
 * This file contains the columns for the SalaryData table.
 * it also provides the renderCell function for the StatusCell and DateCell components
 * and other options for the columns.
 *
 * see https://mui.com/components/data-grid/columns/ for more information
 *
 */
import { GridColDef } from '@mui/x-data-grid';
// import { SalaryDataCell } from '../../components';

export const columnsSalaryData: GridColDef[] = [
  {
    field: 'program',
    headerName: 'Program',
    width: 130,
  },
];

export default columnsSalaryData;
