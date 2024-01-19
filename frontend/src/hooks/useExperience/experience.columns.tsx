/**
 * This file contains the columns for the Inquiry table.
 * it also provides the renderCell function for the StatusCell and DateCell components
 * and other options for the columns.
 *
 * see https://mui.com/components/data-grid/columns/ for more information
 *
 */
import { GridColDef } from '@mui/x-data-grid';

export const columnsExperience: GridColDef[] = [
  { field: 'experience_level', headerName: 'Experience Level', width: 400 },
];

export default columnsExperience;
