/**
 * This file contains the columns for the Ministry table.
 *
 * see https://mui.com/components/data-grid/columns/ for more information
 *
 */
import { GridColDef } from '@mui/x-data-grid';

export const columnsMinistry: GridColDef[] = [
  { field: 'ministry_id', headerName: 'ID', width: 130 },
  { field: 'ministry_name', headerName: 'Ministry', width: 600 },
];

export default columnsMinistry;
