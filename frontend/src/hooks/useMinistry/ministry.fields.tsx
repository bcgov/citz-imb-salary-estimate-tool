import { IFormField } from '@/components';

export const ministryFormFields: IFormField[] = [
  {
    name: 'id',
    label: 'MINISTRY ID',
    type: 'text',
    defaultValue: null,
    section: 'ministry',
    hidden: false,
    sortOrder: 1,
  },
  {
    name: 'ministry_name',
    label: 'MINISTRY NAME',
    type: 'text',
    defaultValue: null,
    section: 'ministry',
    hidden: false,
    sortOrder: 2,
  },
];

export default ministryFormFields;
