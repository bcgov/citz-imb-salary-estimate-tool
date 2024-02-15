import { MinistryData } from './Ministry.d';
import { UseTableFactoryProps } from '@/hooks/factories';

export const ministryTableConfig: UseTableFactoryProps<MinistryData> = {
  title: 'Ministry',
  columns: [
    { field: 'ministry_id', headerName: 'ID', width: 130 },
    { field: 'ministry_name', headerName: 'Ministry', width: 600 },
  ],
};
