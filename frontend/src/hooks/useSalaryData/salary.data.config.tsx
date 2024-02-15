import { UseDataFactoryProps } from '@/hooks/factories';
import { SalaryData } from './SalaryData.d';

export const salaryDataConfig: UseDataFactoryProps<SalaryData> = {
  endPoint: 'salaryData',
};
