/**
 * This hook is to specify the endpoint and the columns for the experience page.
 * It is also the place to transform the data sent to or returned from the backend.
 */

import { useDataFactory, useFormFactory, useTableFactory } from '@/hooks/factories';
import { ExperienceData } from './Experience.d';
import { experienceDataConfig } from './experience.data.config';
import { experienceFormConfig } from './experience.form.config';
import { experienceTableConfig } from './experience.table.config';

export const useExperience = () => {
  const data = useDataFactory<ExperienceData>(experienceDataConfig);

  const formConfig = {
    ...experienceFormConfig,
  };

  formConfig.edit.onSubmit = data.updateItem;
  formConfig.create.onSubmit = data.appendItem;
  formConfig.remove.onSubmit = data.deleteItem;

  const forms = useFormFactory<ExperienceData>(formConfig);

  const tableConfig = {
    rows: data.items,
    forms,
    ...experienceTableConfig,
  };

  const Table = useTableFactory<ExperienceData>(tableConfig);

  return { Table };
};

export default useExperience;
