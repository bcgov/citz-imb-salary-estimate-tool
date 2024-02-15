import { GridValueGetterParams } from '@mui/x-data-grid';
import { UseTableFactoryProps } from '@/hooks/factories';
import { DateCell, StatusCell } from '@/components';
import { InquiryData } from './Inquiry.d';

export const inquiryTableConfig: UseTableFactoryProps<InquiryData> = {
  title: 'Inquiries',
  columns: [
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
        `${params.row.candidate_first_name || ''} ${params.row.candidate_last_name || ''}`,
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
      width: 150,
      renderCell: (params) => <StatusCell value={params.value} />,
    },
  ],
};
