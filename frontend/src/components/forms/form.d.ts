import { GridProps } from '@mui/material';

export type ISelectionOptions = {
  data?: { label: string; value: string | number }[];
  endPoint?: string;
  labelFieldName: string;
  valueFieldName: string;
  sortFieldName?: string;
};

export type IFormField = {
  name: string;
  label: string;
  type:
    | 'currency'
    | 'date'
    | 'multiline'
    | 'number'
    | 'select'
    | 'status'
    | 'text';
  required?: boolean;
  defaultValue: string | number | null;
  selectionOptions?: ISelectionOptions;
  section: string;
  hidden?: boolean;
  sortOrder: number;
};

export type IFormSection = {
  name: string;
  label: string;
  gridItemProps?: GridProps;
};

export type IDefaultValue = {
  [key: string]: string | number | null;
};

interface IFormBaseProps {
  title: string;
  fields: IFormField[];
  sections: IFormSection[];
}

export interface IFormDialogProps extends IFormBaseProps {
  onSubmit: (data: unknown) => void;
  defaultValues: IDefaultValue;
}

export interface IFormProps extends IFormDialogProps {
  open: boolean;
  onClose: () => void;
  mode: 'Create' | 'Edit' | 'View';
}
