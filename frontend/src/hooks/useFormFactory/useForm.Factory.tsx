import { NewFormDialog, IFormFactoryProps } from '../../components';

export const useFormFactory = (props: IFormFactoryProps) => {
  console.log('useFormFactory props', props);

  const defaultValues = {};

  props.fields.forEach((field) => {
    defaultValues[field.name] = field.defaultValue;
  });

  return {
    EditForm: <div>Hello There</div>,
    AddFormDialog: <NewFormDialog defaultValues={defaultValues} {...props} />,
    ViewForm: <div>Hello There</div>,
  };
};

export default useFormFactory;
