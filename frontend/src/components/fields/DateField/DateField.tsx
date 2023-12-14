import { DatePicker } from '@mui/x-date-pickers';
import { useField } from '@tanstack/react-form';

interface DateFieldProps {
  name: string;
  label: string;
  hidden?: boolean;
  required?: boolean;
}

export const DateField = (props: DateFieldProps) => {
  const { label, name, hidden, required } = props;

  const sx = hidden ? { display: 'none' } : { width: '100%' };

  const { form } = useField({ name });

  return (
    <form.Field
      name={name}
      children={(field) =>
        field.state.value !== undefined && (
          <DatePicker
            required={required}
            sx={sx}
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            label={label}
          />
        )
      }
    />
  );
};

DateField.defaultProps = {
  hidden: false,
  required: false,
};

export default DateField;
