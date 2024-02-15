import { UseFormFactoryProps } from '@/hooks/factories';
import { ExperienceData } from './Experience.d';

export const experienceFormConfig: UseFormFactoryProps<ExperienceData> = {
  sections: [
    {
      name: 'experience',
      label: 'Experience',
      gridItemProps: { xs: 6 },
    },
  ],
  fields: [
    {
      name: 'id',
      label: 'id',
      type: 'number',
      section: 'status',
      hidden: true,
      sortOrder: 1,
    },
    {
      name: 'experience_level',
      label: 'Experience Level',
      type: 'text',
      section: 'experience',
      hidden: false,
      sortOrder: 1,
    },
  ],
  title: 'Experience',
  view: {
    show: true,
  },
  edit: {
    show: true,
  },
  remove: {
    show: true,
    confirmationField: 'experience_level',
  },
  create: {
    show: true,
    defaultValues: {
      experience_level: '',
      inquiries: [],
    },
  },
};
