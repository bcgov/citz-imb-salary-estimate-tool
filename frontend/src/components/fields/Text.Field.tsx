import { OutlinedInput, InputLabel, FormControl } from '@mui/material';
import { FieldProps } from './FieldProps.d';

export const TextField = (props: FieldProps) => {
  const { label, value } = props;
  return (
    <FormControl sx={{ m: 1 }}>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <OutlinedInput id={label} value={value} label={label} />
    </FormControl>
  );
};

export default TextField;
