/**
 * this component is used to display the status of a request
 * it uses the Alert component from @mui/material
 * see https://mui.com/components/alert/ for more information
 *
 * any changes to the states should be done in the State enum and this component
 *
 * @param {StatusCellProps} props
 * @returns {JSX.Element}
 *
 */
import { Alert } from '@mui/material';
import { State } from '@/types';

interface StatusCellProps extends React.HTMLAttributes<HTMLDivElement> {
  value: State;
}

export const StatusCell = (props: StatusCellProps) => {
  const { value } = props;

  const actionProps: {
    severity: 'info' | 'warning' | 'error' | 'success';
    text: string;
    variant: 'outlined' | 'filled' | 'standard';
  } = { severity: 'info', text: '', variant: 'outlined' };

  switch (value) {
    case State.draft:
      actionProps.severity = 'info';
      actionProps.variant = 'outlined';
      actionProps.text = 'Draft';

      break;
    case State.submitted:
      actionProps.severity = 'warning';
      actionProps.variant = 'standard';
      actionProps.text = 'Submitted';

      break;
    case State.reviewed:
      actionProps.severity = 'warning';
      actionProps.variant = 'standard';
      actionProps.text = 'Reviewed';

      break;
    case State.approved:
      actionProps.severity = 'success';
      actionProps.variant = 'standard';
      actionProps.text = 'Approved';

      break;
    case State.rejected:
      actionProps.severity = 'error';
      actionProps.variant = 'standard';
      actionProps.text = 'Rejected';

      break;
    default:
      actionProps.severity = 'info';
      actionProps.variant = 'outlined';
      actionProps.text = 'New';
  }

  return (
    <Alert
      severity={actionProps.severity}
      variant={actionProps.variant}
      icon={false}
      sx={{ width: '100%' }}
    >
      {actionProps.text}
    </Alert>
  );
};

export default StatusCell;
