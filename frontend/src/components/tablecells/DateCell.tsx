/**
 * this component is used to display a date in a table cell
 * it uses the Typography component from @mui/material
 * see https://mui.com/components/typography/ for more information
 *
 * @param {DateCellProps} props
 * @returns {JSX.Element}
 *
 */
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
