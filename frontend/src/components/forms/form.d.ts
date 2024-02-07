import { GridProps } from '@mui/material';

export type ISelectionOptions = {
  data?: { label: string; value: string | number }[];
  endPoint?: string;
  labelFieldName: string;
  valueFieldName: string;
  sortFieldName?: string;
};

export type FormField = {
  name: string;
  label: string;
  type: 'currency' | 'date' | 'multiline' | 'number' | 'select' | 'status' | 'text';
  required?: boolean;
  defaultValue: string | number | null;
  selectionOptions?: ISelectionOptions;
  section: string;
  hidden?: boolean;
  sortOrder: number;
};

export type FormSection = {
  name: string;
  label: string;
  gridItemProps?: GridProps;
};

export type IDefaultValue = {
  [key: string]: string | number | null;
};

export interface FormBaseProps {
  title: string;
  fields: IFormField[];
  sections: IFormSection[];
}

export interface FormProps<TDataType> {
  defaultValues: IDefaultValue;
  open: boolean;
  onClose: () => void;
  onSubmit: (data: TDataType) => void;
  mode: 'Create' | 'Edit' | 'View';
  fields: IFormField[];
  sections: IFormSection[];
  title: string;
}
