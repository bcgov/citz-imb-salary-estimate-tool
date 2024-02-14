import { UseFormFactoryProps } from '@/hooks/factories';
import { SalaryData } from './SalaryData.d';

export const salaryFormConfig: UseFormFactoryProps<SalaryData> = {
  view: {
    show: false,
  },
  edit: {
    show: false,
  },
  addBulk: {
    show: true,
  },
  remove: {
    show: false,
  },
  create: {
    show: false,
  },
};
