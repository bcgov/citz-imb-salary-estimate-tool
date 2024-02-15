/**
 * This hook is to specify the endpoint and the columns for the Admin page.
 * It is also the place to transform the data sent to or returned from the backend.
 */
import { useDataFactory, useFormFactory, useTableFactory } from '@/hooks/factories';
import { SalaryData } from './SalaryData.d';
import { salaryDataConfig } from './salary.data.config';
import { salaryFormConfig } from './salary.form.config';
import { salaryTableConfig } from './salary.table.config';

export const useSalaryData = () => {
  const data = useDataFactory<SalaryData>(salaryDataConfig);

  const formConfig = {
    ...salaryFormConfig,
  };

  if (formConfig.addBulk) formConfig.addBulk.onSubmit = data.appendBulkItems;

  const forms = useFormFactory<SalaryData>(formConfig);

  const tableConfig = {
    rows: data.items,
    forms,
    ...salaryTableConfig,
  };

  const Table = useTableFactory<SalaryData>(tableConfig);

  return { Table };
};

export default useSalaryData;
