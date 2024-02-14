import { UseTableFactoryProps } from '@/hooks/factories';
import { SalaryData } from './SalaryData.d';

export const salaryTableConfig: UseTableFactoryProps<SalaryData> = {
  title: 'Salary Data',
  columns: [
    {
      field: 'organization',
      headerName: 'Organization',
      width: 130,
    },
    {
      field: 'program',
      headerName: 'Program',
      width: 130,
    },
    {
      field: 'program_division',
      headerName: 'Program Division',
      width: 130,
    },
    {
      field: 'position_number',
      headerName: 'Position Number',
      width: 130,
    },
    {
      field: 'title',
      headerName: 'Job Title',
      width: 130,
    },
  ],
};
