// import { GridColDef } from '@mui/x-data-grid';
import type { FormField, FormSection } from '@/components';

export interface UseFormFactoryProps<TDataType> {
  view: {
    show: boolean;
  };
  edit: {
    show: boolean;
    onSubmit?: (data: TDataType) => void;
  };
  remove: {
    show: boolean;
    confirmationField?: string;
    onSubmit?: () => void;
  };
  create: {
    show: boolean;
    defaultValues?: TDataType;
    onSubmit?: (data: TDataType) => void;
  };
  fields?: FormField[];
  sections?: FormSection[];
  title?: string;
  onSubmit?: (data: TDataType) => void;
}

export type UseFormFactoryReturn<TDataType> = {
  view: {
    show: boolean;
    FormDialog?: (data: TDataType) => JSX.Element;
  };
  edit: {
    show: boolean;
    FormDialog?: (data: TDataType) => JSX.Element;
  };
  create: {
    show: boolean;
    FormDialog?: (data: TDataType) => JSX.Element;
  };
  remove: {
    show: boolean;
    confirmationField?: string;
    FormDialog?: (data: TDataType) => JSX.Element;
  };
};
