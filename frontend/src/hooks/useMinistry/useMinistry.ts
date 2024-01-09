/**
 * This hook is to specify the endpoint and the columns for the Admin page.
 * It is also the place to transform the data sent to or returned from the backend.
 */
import { useDataFactory } from '../useDataFactory/useData.Factory';
import { columnsMinistry } from './ministry.columns';
import { MinistryData } from '../../types';

export const useMinistry = () => {
  const endPoint = 'ministry';
  const title = 'Ministry';

  const ministryData = useDataFactory<MinistryData>({
    endPoint,
    title,
    tableColumns: columnsMinistry,
    showDeleteRow: false,
  });
  return {
    MinistryTable: ministryData.DataTable,
  };
};

export default useMinistry;
