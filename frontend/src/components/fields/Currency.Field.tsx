import { InputAdornment, TextField as TextFieldMUI } from '@mui/material';
import { useField } from '@tanstack/react-form';

interface CurrencyFieldProps {
  name: string;
  label: string;
  hidden?: boolean;
}

export const CurrencyField = (props: CurrencyFieldProps) => {
  const { label, name, hidden } = props;

  const sx = hidden ? { display: 'none' } : {};

  const { form } = useField({ name });

  return (
    <form.Field
      name={name}
      children={(field) => (
        <TextFieldMUI
          sx={sx}
          name={field.name}
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          value={field.state.value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
          label={label}
        />
      )}
    />
  );
};

CurrencyField.defaultProps = {
  hidden: false,
};

export default CurrencyField;
