export enum FieldTypes {
  CURRENCY = 'currency',
  DATE = 'date',
  EMAIL = 'email',
  NUMBER = 'number',
  PASSWORD = 'password',
  STATUS = 'status',
  TEXT = 'text',
}

export interface FieldProps {
  name: string;
  label: string;
  type?: FieldTypes;
  required?: boolean;
  value: unknown;
}
