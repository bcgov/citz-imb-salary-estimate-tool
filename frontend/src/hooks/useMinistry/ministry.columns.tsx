/**
 * This file contains the columns for the Ministry table.
 *
 * see https://mui.com/components/data-grid/columns/ for more information
 *
 */
import { GridColDef } from '@mui/x-data-grid';

export const columnsMinistry: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'ministry_name', headerName: 'Ministry', width: 250 },
];

export default columnsMinistry;
