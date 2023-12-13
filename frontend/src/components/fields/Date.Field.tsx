import { DatePicker } from '@mui/x-date-pickers';
import { useField } from '@tanstack/react-form';

interface DateFieldProps {
  name: string;
  label: string;
  hidden?: boolean;
}

export const DateField = (props: DateFieldProps) => {
  const { label, name, hidden } = props;

  const sx = hidden ? { display: 'none' } : { width: '100%' };

  const { form } = useField({ name });

  return (
    <form.Field
      name={name}
      children={(field) =>
        field.state.value !== undefined && (
          <DatePicker
            sx={sx}
            value={field.state.value}
            // onBlur={field.handleBlur}
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
};

export default DateField;
