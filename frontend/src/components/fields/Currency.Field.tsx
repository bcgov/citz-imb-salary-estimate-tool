import { OutlinedInput, InputAdornment, InputLabel } from '@mui/material';
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
    <>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <OutlinedInput
        id={label}
        value={value}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        label={label}
        onChange={handleChange}
      />
    </>
  );
};

export default CurrencyField;
