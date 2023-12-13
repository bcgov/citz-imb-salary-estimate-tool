import { TextField as TextFieldMUI } from '@mui/material';
import { useField } from '@tanstack/react-form';

interface MultilineFieldProps {
  name: string;
  label: string;
  hidden?: boolean;
}

export const MultilineField = (props: MultilineFieldProps) => {
  const { label, name, hidden } = props;

  const sx = hidden ? { display: 'none' } : { width: '100%' };

  const { form } = useField({ name });

  return (
    <form.Field
      name={name}
      children={(field) => (
        <TextFieldMUI
          rows={4}
          multiline
          sx={sx}
          name={field.name}
          type="text"
          value={field.state.value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
          label={label}
        />
      )}
    />
  );
};

export default MultilineField;
