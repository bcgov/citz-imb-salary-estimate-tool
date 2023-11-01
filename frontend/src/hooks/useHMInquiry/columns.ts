import { GridColDef } from '@mui/x-data-grid';

export const columnsHMInquiry: GridColDef[] = [
  { field: 'new_position_number', headerName: 'Position Number', width: 130 },
  {
    field: 'new_position_title',
    headerName: 'Position Title',
    width: 130,
  },
  { field: 'candidate_name', headerName: 'Candidate Name', width: 130 },
  {
    field: 'inquiry_submission_date',
    headerName: 'Submission Date',
    width: 130,
  },
  {
    field: 'status_id',
    headerName: 'Status',
    width: 130,
  },
];

export default columnsHMInquiry;
