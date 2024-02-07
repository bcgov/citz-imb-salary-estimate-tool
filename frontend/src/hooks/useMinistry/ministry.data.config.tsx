import { MinistryData } from './Ministry.d';
import { UseDataFactoryProps } from '@/hooks/factories';

export const ministryDataConfig: UseDataFactoryProps<MinistryData> = {
  endPoint: 'ministry',
};
