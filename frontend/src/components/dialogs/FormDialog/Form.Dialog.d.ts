export interface FormDialogProps<TDataType> {
  onSubmit: (data: TDataType) => void;
  defaultValues: IDefaultValue;
  mode: 'Create' | 'Edit' | 'View';
  fields: IFormField[];
  sections: IFormSection[];
  title: string;
}
