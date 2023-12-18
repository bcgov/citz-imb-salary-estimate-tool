/**
 * This hook is to specify the endpoint and the columns for the Admin page.
 * It is also the place to transform the data sent to or returned from the backend.
 */
import { useDataFactory } from '../useDataFactory/useData.Factory';
import { columnsSalaryData } from './salaryData.columns';
import { SalaryData } from '../../types';

export const useSalaryData = () => {
  const endPoint = 'salary';
  const title = 'Past Salary Data';
  const salaryData = useDataFactory<SalaryData>({
    endPoint,
    title,
    tableColumns: columnsSalaryData,
  });

  return {
    SalaryDataTable: salaryData.DataTable,
  };
};

export default useSalaryData;
