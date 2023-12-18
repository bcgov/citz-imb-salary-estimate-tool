import { InputAdornment, TextField as TextFieldMUI } from '@mui/material';
import { useField } from '@tanstack/react-form';

interface CurrencyFieldProps {
  name: string;
  label: string;
  hidden?: boolean;
  required?: boolean;
}

export const CurrencyField = (props: CurrencyFieldProps) => {
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            value={field.state.value}
            onBlur={field.handleBlur}
            onChange={(e) =>
              field.handleChange(Number(e.target.value) as never)
            }
            label={label}
          />
        )
      }
    />
  );
};

CurrencyField.defaultProps = {
  hidden: false,
  required: false,
};

export default CurrencyField;
