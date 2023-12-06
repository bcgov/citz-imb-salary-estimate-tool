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
}

export const fieldsInquiry: IField[] = [
  {
    name: 'id',
    label: 'id',
    type: 'number',
    required: false,
    defaultValue: 1000,
  },
  {
    name: 'status_id',
    label: 'Current State',
    type: 'status',
    // required: true,
    defaultValue: 1,
  },
  {
    name: 'inquiry_submission_date',
    label: 'Submission Date',
    type: 'date',
    // required: true,
    defaultValue: null,
  },
  {
    name: 'inquiry_completion_date',
    label: 'Completion Date',
    type: 'date',
    // required: true,
    defaultValue: null,
  },
  {
    name: 'candidate_first_name',
    label: 'First Name',
    type: 'text',
    // required: true,
    defaultValue: '',
  },
  {
    name: 'candidate_last_name',
    label: 'Last Name',
    type: 'text',
    // required: true,
    defaultValue: '',
  },
  {
    name: 'current_position_number',
    label: 'Current Position Number',
    type: 'number',
    // required: true,
    defaultValue: 0,
  },
  {
    name: 'current_position_title',
    label: 'Current Position Title',
    type: 'text',
    // required: true,
    defaultValue: '',
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
    // required: true,
    defaultValue: '',
  },
  {
    name: 'current_annual_salary',
    label: 'Current Annual Salary',
    type: 'currency',
    // required: true,
    defaultValue: 0,
  },
  {
    name: 'current_mccf_classification_id',
    label: 'Current Classification',
    type: 'number',
    // required: true,
    defaultValue: 0,
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
    defaultValue: '',
  },
  {
    name: 'new_position_number',
    label: 'New Position Number',
    type: 'number',
    // required: true,
    defaultValue: 0,
  },
  {
    name: 'new_position_title',
    label: 'New Position Title',
    type: 'text',
    // required: true,
    defaultValue: '',
  },
  {
    name: 'new_mccf_classification_id',
    label: 'New Classification',
    type: 'number',
    // required: true,
    defaultValue: 0,
  },
  {
    name: 'appointment_type_id',
    label: 'Appointment Type',
    type: 'select',
    dataOptions: {
      endPoint: 'appointment',
      labelFieldName: 'id',
      valueFieldName: 'id',
    },
    // required: true,
    defaultValue: '',
  },
  {
    name: 'process_type_id',
    label: 'Process Type',
    type: 'select',
    dataOptions: {
      endPoint: 'process',
      labelFieldName: 'id',
      valueFieldName: 'id',
    },
    // required: true,
    defaultValue: '',
  },
  {
    name: 'salary_estimate',
    label: 'Salary Estimate',
    type: 'number',
    // required: true,
    defaultValue: 0,
  },
  {
    name: 'hm_comment',
    label: 'Hiring Manager Comments',
    type: 'multiline',
    // required: true,
    defaultValue: '',
  },
  {
    name: 'shr_comment',
    label: 'Strategic Human Resources Comments',
    type: 'multiline',
    // required: true,
    defaultValue: '',
  },
  {
    name: 'adm_comment',
    label: 'Assistant Deputy Minister Comments',
    type: 'multiline',
    // required: true,
    defaultValue: '',
  },
];

export default fieldsInquiry;
