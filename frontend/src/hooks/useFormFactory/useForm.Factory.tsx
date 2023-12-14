import {
  NewFormDialog,
  ViewFormDialog,
  UpdateFormDialog,
  IFormFactoryProps,
  DeleteConfirmationDialog,
} from '../../components';

export const useFormFactory = (props: IFormFactoryProps) => {
  const { onAppend, onUpdate, onDelete, ...otherProps } = props;
  const defaultValues = {};

  props.fields.forEach((field) => {
    defaultValues[field.name] = field.defaultValue;
  });

  return {
    EditFormDialog: (data) => (
      <UpdateFormDialog
        defaultValues={data}
        onSubmit={onUpdate}
        {...otherProps}
      />
    ),
    AddFormDialog: (
      <NewFormDialog
        defaultValues={defaultValues}
        onSubmit={onAppend}
        {...otherProps}
      />
    ),
    ViewFormDialog: (data) => (
      <ViewFormDialog
        defaultValues={data}
        onSubmit={() => {}}
        {...otherProps}
      />
    ),
    DeleteRow: (row) => (
      <DeleteConfirmationDialog
        onSubmit={() => onDelete((row as { id: number }).id)}
        position={`${
          (row as { new_position_title: string }).new_position_title
        } (${(row as { new_position_number: string }).new_position_number})`}
      />
    ),
  };
};

export default useFormFactory;
