export enum FieldTypes {
  CURRENCY = 'currency',
  DATE = 'date',
  EMAIL = 'email',
  HIDDEN = 'hidden',
  ID = 'id',
  MULTILINE = 'multiline',
  NUMBER = 'number',
  PASSWORD = 'password',
  SELECT = 'select',
  STATUS = 'status',
  TEXT = 'text',
}

export type DataOptions = {
  endPoint: string;
  labelFieldName: string;
  valueFieldName: string;
};

export interface FieldProps {
  id: string;
  name?: string;
  label: string;
  type?: FieldTypes;
  required?: boolean;
  value: unknown;
  onChange: (value: unknown) => void;
  dataOptions?: DataOptions;
}
