import {
  NewFormDialog,
  ViewFormDialog,
  IFormFactoryProps,
} from '../../components';

export const useFormFactory = (props: IFormFactoryProps) => {
  const { onAppend, onUpdate, ...otherProps } = props;
  const defaultValues = {};

  props.fields.forEach((field) => {
    defaultValues[field.name] = field.defaultValue;
  });

  return {
    EditForm: <div>Hello There</div>,
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
