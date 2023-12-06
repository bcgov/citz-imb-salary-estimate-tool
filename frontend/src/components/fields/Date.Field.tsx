import { DatePicker } from '@mui/x-date-pickers';
import { DateTime } from 'luxon';
import { FieldProps } from './FieldProps.d';

interface DateFieldProps extends FieldProps {
  value: DateTime | null;
}

export const DateField = (props: DateFieldProps) => {
  const { label, value, onChange } = props;

  const handleChange = (event: DateTime | null) => {
    onChange(event);
  };

  return <DatePicker label={label} value={value} onChange={handleChange} />;
};

export default DateField;
