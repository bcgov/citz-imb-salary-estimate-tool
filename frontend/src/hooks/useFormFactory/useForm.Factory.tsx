import {
  NewFormDialog,
  ViewFormDialog,
  UpdateFormDialog,
  IFormFactoryProps,
} from '../../components';

export const useFormFactory = (props: IFormFactoryProps) => {
  const { onAppend, onUpdate, ...otherProps } = props;
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
  };
};

export default useFormFactory;
