import { InputAdornment, TextField as TextFieldMUI } from '@mui/material';
import { FieldProps } from './FieldProps.d';

interface CurrencyFieldProps extends FieldProps {
  value: number;
}

export const CurrencyField = (props: CurrencyFieldProps) => {
  const { label, value, onChange } = props;
  // TODO: fix css alignment

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <TextFieldMUI
      type="number"
      id={label}
      value={value}
      label={label}
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
      onChange={handleChange}
    />
  );
};

export default CurrencyField;
