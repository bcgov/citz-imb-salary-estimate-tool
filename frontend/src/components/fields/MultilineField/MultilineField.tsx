import { TextField as TextFieldMUI } from '@mui/material';
import { useField } from '@tanstack/react-form';

interface MultilineFieldProps {
  name: string;
  label: string;
  hidden?: boolean;
  required?: boolean;
}

export const MultilineField = (props: MultilineFieldProps) => {
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
            rows={4}
            multiline
            sx={sx}
            name={field.name}
            type="text"
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

MultilineField.defaultProps = {
  hidden: false,
  required: false,
};

export default MultilineField;
