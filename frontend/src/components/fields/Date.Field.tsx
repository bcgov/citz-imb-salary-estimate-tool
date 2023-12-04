import { FormControl } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { FieldProps } from './FieldProps.d';

export const DateField = (props: FieldProps) => {
  const { label, value } = props;

  return (
    <FormControl sx={{ m: 1 }}>
      <DatePicker label={label} value={value} />
    </FormControl>
  );
};

export default DateField;
