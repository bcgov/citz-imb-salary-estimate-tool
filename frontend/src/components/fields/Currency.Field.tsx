import {
  OutlinedInput,
  InputAdornment,
  InputLabel,
  FormControl,
} from '@mui/material';
import { FieldProps } from './FieldProps.d';

export const CurrencyField = (props: FieldProps) => {
  const { label, value } = props;
  return (
    <FormControl sx={{ m: 1 }}>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <OutlinedInput
        id={label}
        value={value}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        label={label}
      />
    </FormControl>
  );
};

export default CurrencyField;
