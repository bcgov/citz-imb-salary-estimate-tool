import { IFormField } from '@/components';

export const ministryFormFields: IFormField[] = [
  {
    name: 'id',
    label: 'id',
    type: 'number',
    defaultValue: 0,
    section: 'status',
    hidden: true,
    sortOrder: 1,
  },
  {
    name: 'ministry_id',
    label: 'MINISTRY ID',
    type: 'text',
    defaultValue: null,
    section: 'ministry',
    hidden: false,
    sortOrder: 2,
  },
  {
    name: 'ministry_name',
    label: 'MINISTRY NAME',
    type: 'text',
    defaultValue: null,
    section: 'ministry',
    hidden: false,
    sortOrder: 3,
  },
];

export default ministryFormFields;
