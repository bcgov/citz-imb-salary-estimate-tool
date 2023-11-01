import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DateCell } from '../../components/tablecells/DateCell';

export const columnsHMInquiry: GridColDef[] = [
  { field: 'new_position_number', headerName: 'Position Number', width: 130 },
  {
    field: 'new_position_title',
    headerName: 'Position Title',
    width: 150,
  },
  {
    field: 'candidate_name',
    headerName: 'Candidate Name',
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.candidate_first_name || ''} ${
        params.row.candidate_last_name || ''
      }`,
  },
  {
    field: 'inquiry_submission_date',
    headerName: 'Submission Date',
    width: 130,
    renderCell: (params) => <DateCell value={params.value} />,
  },
  {
    field: 'status_id',
    headerName: 'Status',
    width: 130,
  },
];

export default columnsHMInquiry;
