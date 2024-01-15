/**
 * This hook is to specify the endpoint and the columns for the experience page.
 * It is also the place to transform the data sent to or returned from the backend.
 */

import { ExperienceData } from '@/types';
import { useDataFactory } from '@/hooks/useDataFactory/useData.Factory';
import { columnsExperience } from './experience.columns';
import { experienceFormFields } from './experience.fields';
import { experienceSections } from './experience.sections';

export const useExperience = () => {
  const endPoint = 'experience';
  const title = 'Experience';

  const experienceData = useDataFactory<ExperienceData>({
    endPoint,
    title,
    tableColumns: columnsExperience,
    formSections: experienceSections,
    formFields: experienceFormFields,
  });

  return {
    ExperienceTable: experienceData.DataTable,
  };
};

export default useExperience;
