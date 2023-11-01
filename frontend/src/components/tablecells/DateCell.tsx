import { Typography } from '@mui/material';
import { DateTime } from 'luxon';

interface DateCellProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const DateCell = (props: DateCellProps) => {
  const { value } = props;

  const date = DateTime.fromISO(value);

  return <Typography>{date.setLocale('en-ca').toLocaleString()}</Typography>;
};

export default DateCell;
