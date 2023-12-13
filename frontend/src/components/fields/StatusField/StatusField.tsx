import { useField } from '@tanstack/react-form';
import { StatusStepper } from '../../stepper/StatusStepper';

interface StatusFieldProps {
  name: string;
  hidden?: boolean;
}

export const StatusField = (props: StatusFieldProps) => {
  const { name, hidden } = props;

  const { form } = useField({ name });

  return (
    <form.Field
      name={name}
      children={(field) => (
        <StatusStepper hidden={hidden} status={field.state.value} />
      )}
    />
  );
};

StatusField.defaultProps = {
  hidden: false,
};

export default StatusField;
