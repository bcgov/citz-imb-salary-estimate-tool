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
    sortFieldName?: string;
  };
  section: 'employee' | 'position' | 'comment' | 'hidden';
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
    section: 'employee',
    sortOrder: 1,
  },
  {
    name: 'candidate_last_name',
    label: 'Last Name',
    type: 'text',
    required: true,
    defaultValue: '',
    section: 'employee',
    sortOrder: 2,
  },

  {
    name: 'current_ministry_id',
    label: 'Current Ministry',
    type: 'select',
    dataOptions: {
      endPoint: 'ministry',
      labelFieldName: 'ministry_name',
      valueFieldName: 'id',
      sortFieldName: 'ministry_name',
    },
    defaultValue: '',
    section: 'employee',
    sortOrder: 3,
  },
  {
    name: 'current_mccf_classification_id',
    label: 'Current Classification',
    type: 'text',
    defaultValue: '',
    section: 'employee',
    sortOrder: 4,
  },
  {
    name: 'current_position_title',
    label: 'Current Position Title',
    type: 'text',
    defaultValue: '',
    section: 'employee',
    sortOrder: 5,
  },
  {
    name: 'current_position_number',
    label: 'Current Position Number',
    type: 'text',
    defaultValue: '',
    section: 'employee',
    sortOrder: 6,
  },
  {
    name: 'current_annual_salary',
    label: 'Current Annual Salary',
    type: 'currency',
    defaultValue: 0,
    section: 'employee',
    sortOrder: 7,
  },
  {
    name: 'new_position_title',
    label: 'New Position Title',
    type: 'text',
    required: true,
    defaultValue: '',
    section: 'position',
    sortOrder: 1,
  },
  {
    name: 'new_position_number',
    label: 'New Position Number',
    type: 'text',
    required: true,
    defaultValue: '',
    section: 'position',
    sortOrder: 2,
  },
  {
    name: 'new_mccf_classification_id',
    label: 'New Classification',
    type: 'select',
    required: true,
    defaultValue: '',
    section: 'position',
    sortOrder: 3,
    dataOptions: {
      endPoint: 'ranges',
      labelFieldName: 'definition',
      valueFieldName: 'id',
      sortFieldName: 'minimum_salary',
    },
  },
  {
    name: 'salary_estimate',
    label: 'Salary Estimate',
    type: 'currency',
    defaultValue: 0,
    section: 'position',
    sortOrder: 4,
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
    section: 'position',
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
      sortFieldName: 'definition',
    },
    defaultValue: 2,
    section: 'position',
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
      sortFieldName: 'definition',
    },
    defaultValue: 1,
    section: 'position',
    sortOrder: 7,
  },
  {
    name: 'hm_comment',
    label: 'Hiring Manager Comments',
    type: 'multiline',
    defaultValue: '',
    section: 'comment',
    sortOrder: 1,
  },
  {
    name: 'shr_comment',
    label: 'Strategic Human Resources Comments',
    type: 'multiline',
    defaultValue: '',
    section: 'comment',
    sortOrder: 2,
  },
  {
    name: 'adm_comment',
    label: 'Assistant Deputy Minister Comments',
    type: 'multiline',
    defaultValue: '',
    section: 'comment',
    sortOrder: 3,
  },
];

export default fieldsInquiry;
