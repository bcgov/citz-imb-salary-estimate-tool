/**
 * This hook is to specify the endpoint and the columns for the Admin page.
 * It is also the place to transform the data sent to or returned from the backend.
 */
import { useDataFactory } from '../useDataFactory/useData.Factory';
import { columnsMinistry } from './ministry.columns';
import { MinistryData } from '../../types';
import { ministryFormFields } from './ministry.fields';
import { ministrySections } from './ministry.sections';

export const useMinistry = () => {
  const endPoint = 'ministry';
  const title = 'Ministry';

  const ministryData = useDataFactory<MinistryData>({
    endPoint,
    title,
    tableColumns: columnsMinistry,
    formSections: ministrySections,
    formFields: ministryFormFields,
    showAddForm: true,
    showViewForm: true,
    showEditForm: true,
    showDeleteRow: true,
  });
  return {
    MinistryTable: ministryData.DataTable,
  };
};

export default useMinistry;
