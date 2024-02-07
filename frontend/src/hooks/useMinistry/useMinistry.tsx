/**
 * This hook is to specify the endpoint and the columns for the Ministry page.
 * It is also the place to transform the data sent to or returned from the backend.
 */
import { useDataFactory, useFormFactory, useTableFactory } from '@/hooks/factories';
import { MinistryData } from './Ministry.d';
import { ministryDataConfig } from './ministry.data.config';
import { ministryFormConfig } from './ministry.form.config';
import { ministryTableConfig } from './ministry.table.config';

export const useMinistry = () => {
  const data = useDataFactory<MinistryData>(ministryDataConfig);

  const formConfig = {
    ...ministryFormConfig,
  };

  formConfig.edit.onSubmit = data.updateItem;
  formConfig.create.onSubmit = data.appendItem;
  formConfig.remove.onSubmit = data.deleteItem;

  const forms = useFormFactory<MinistryData>(formConfig);

  const tableConfig = {
    rows: data.items,
    forms,
    ...ministryTableConfig,
  };

  const ministryTable = useTableFactory<MinistryData>(tableConfig);

  return {
    MinistryTable: ministryTable,
  };
};

export default useMinistry;
