import { useField } from '@tanstack/react-form';
import { TextField as TextFieldMUI } from '@mui/material';

interface TextFieldProps {
  name: string;
  label: string;
  hidden?: boolean;
  mode: 'Create' | 'Edit' | 'View';
}

export const TextField = (props: TextFieldProps) => {
  const { label, name, hidden, mode } = props;

  const sx = hidden ? { display: 'none' } : { width: '100%' };

  const { form } = useField({ name });

  return (
    <form.Field
      name={name}
      children={(field) =>
        field.state.value !== undefined && (
          <TextFieldMUI
            sx={sx}
            name={field.name}
            type="text"
            value={field.state.value}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
            label={label}
            inputProps={{ readOnly: mode === 'View' }}
          />
        )
      }
    />
  );
};

TextField.defaultProps = {
  hidden: false,
};

export default TextField;
