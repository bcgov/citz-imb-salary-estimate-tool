import { IFormField } from '@/components';

export const experienceFormFields: IFormField[] = [
  {
    name: 'id',
    label: 'id',
    type: 'number',
    defaultValue: '',
    section: 'experience',
    hidden: true,
    sortOrder: 1,
  },
  {
    name: 'definition',
    label: 'Experience Level',
    type: 'text',
    required: true,
    defaultValue: '',
    section: 'experience',
    sortOrder: 1,
  },
];

export default experienceFormFields;
