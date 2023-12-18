import { useField } from '@tanstack/react-form';
import { TextField as TextFieldMUI } from '@mui/material';

interface NumberFieldProps {
  name: string;
  label: string;
  hidden?: boolean;
  required?: boolean;
}

export const NumberField = (props: NumberFieldProps) => {
  const { label, name, hidden, required } = props;

  const sx = hidden ? { display: 'none' } : { width: '100%' };

  const { form } = useField({ name });

  return (
    <form.Field
      name={name}
      children={(field) =>
        field.state.value !== undefined && (
          <TextFieldMUI
            required={required}
            sx={sx}
            name={field.name}
            type="number"
            value={field.state.value}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value as never)}
            label={label}
          />
        )
      }
    />
  );
};

NumberField.defaultProps = {
  hidden: false,
  required: false,
};

export default NumberField;
