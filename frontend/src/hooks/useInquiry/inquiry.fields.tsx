interface IField {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  defaultValue?: string | number | null;
  dataOptions?: {
    endPoint: string;
    labelFieldName: string;
    valueFieldName: string;
  };
  section: 'header' | 'main' | 'footer' | 'hidden';
  sortOrder: number;
}

export const fieldsInquiry: IField[] = [
  {
    name: 'id',
    label: 'id',
    type: 'number',
    defaultValue: '',
    section: 'hidden',
    sortOrder: 1,
  },
  {
    name: 'status_id',
    label: 'Current State',
    type: 'text',
    defaultValue: 1,
    section: 'hidden',
    sortOrder: 2,
  },
  {
    name: 'candidate_first_name',
    label: 'First Name',
    type: 'text',
    required: true,
    defaultValue: '',
    section: 'header',
    sortOrder: 1,
  },
  {
    name: 'candidate_last_name',
    label: 'Last Name',
    type: 'text',
    required: true,
    defaultValue: '',
    section: 'header',
    sortOrder: 2,
  },
  {
    name: 'current_position_number',
    label: 'Current Position Number',
    type: 'number',
    defaultValue: 0,
    section: 'main',
    sortOrder: 5,
  },
  {
    name: 'current_position_title',
    label: 'Current Position Title',
    type: 'text',
    defaultValue: '',
    section: 'main',
    sortOrder: 6,
  },
  {
    name: 'current_ministry_id',
    label: 'Current Ministry',
    type: 'select',
    dataOptions: {
      endPoint: 'ministry',
      labelFieldName: 'ministry_name',
      valueFieldName: 'id',
    },
    defaultValue: '',
    section: 'main',
    sortOrder: 7,
  },
  {
    name: 'current_annual_salary',
    label: 'Current Annual Salary',
    type: 'currency',
    defaultValue: 0,
    section: 'main',
    sortOrder: 8,
  },
  {
    name: 'current_mccf_classification_id',
    label: 'Current Classification',
    type: 'number',
    defaultValue: 0,
    section: 'main',
    sortOrder: 9,
  },
  {
    name: 'experience_level_id',
    label: 'Experience Level',
    type: 'select',
    dataOptions: {
      endPoint: 'experience',
      labelFieldName: 'definition',
      valueFieldName: 'id',
    },
    defaultValue: 1,
    section: 'main',
    sortOrder: 1,
  },
  {
    name: 'new_position_number',
    label: 'New Position Number',
    type: 'number',
    required: true,
    defaultValue: 0,
    section: 'header',
    sortOrder: 3,
  },
  {
    name: 'new_position_title',
    label: 'New Position Title',
    type: 'text',
    required: true,
    defaultValue: '',
    section: 'header',
    sortOrder: 4,
  },
  {
    name: 'new_mccf_classification_id',
    label: 'New Classification',
    type: 'number',
    required: true,
    defaultValue: 0,
    section: 'header',
    sortOrder: 5,
  },
  {
    name: 'appointment_type_id',
    label: 'Appointment Type',
    type: 'select',
    dataOptions: {
      endPoint: 'appointment',
      labelFieldName: 'definition',
      valueFieldName: 'id',
    },
    defaultValue: 2,
    section: 'header',
    sortOrder: 6,
  },
  {
    name: 'process_type_id',
    label: 'Process Type',
    type: 'select',
    dataOptions: {
      endPoint: 'process',
      labelFieldName: 'definition',
      valueFieldName: 'id',
    },
    defaultValue: 1,
    section: 'header',
    sortOrder: 7,
  },
  {
    name: 'salary_estimate',
    label: 'Salary Estimate',
    type: 'number',
    defaultValue: 0,
    section: 'main',
    sortOrder: 1,
  },
  {
    name: 'hm_comment',
    label: 'Hiring Manager Comments',
    type: 'multiline',
    defaultValue: '',
    section: 'footer',
    sortOrder: 1,
  },
  {
    name: 'shr_comment',
    label: 'Strategic Human Resources Comments',
    type: 'multiline',
    defaultValue: '',
    section: 'footer',
    sortOrder: 2,
  },
  {
    name: 'adm_comment',
    label: 'Assistant Deputy Minister Comments',
    type: 'multiline',
    defaultValue: '',
    section: 'footer',
    sortOrder: 3,
  },
];

export default fieldsInquiry;
