import { DatePicker } from '@mui/x-date-pickers';
import { DateTime } from 'luxon';
import { FieldProps } from './FieldProps.d';

interface DateFieldProps extends FieldProps {
  value: DateTime | null;
}

export const DateField = (props: DateFieldProps) => <DatePicker {...props} />;

export default DateField;
