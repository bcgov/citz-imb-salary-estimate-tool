import { UseFormFactoryProps } from '@/hooks/factories';
import { MinistryData } from './Ministry.d';

export const ministryFormConfig: UseFormFactoryProps<MinistryData> = {
  sections: [
    {
      name: 'ministry',
      label: 'Ministry',
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
      name: 'ministry_id',
      label: 'MINISTRY ID',
      type: 'text',
      section: 'ministry',
      hidden: false,
      sortOrder: 2,
    },
    {
      name: 'ministry_name',
      label: 'MINISTRY NAME',
      type: 'text',
      section: 'ministry',
      hidden: false,
      sortOrder: 3,
    },
  ],
  title: 'Ministry',
  view: {
    show: true,
  },
  edit: {
    show: true,
  },
  remove: {
    show: true,
    confirmationField: 'ministry_name',
  },
  create: {
    show: true,
    defaultValues: {
      ministry_id: '',
      ministry_name: '',
      inquiries: [],
    },
  },
};
