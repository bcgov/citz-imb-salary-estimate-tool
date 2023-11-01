import { Alert } from '@mui/material';
import { State } from '../../types';

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
    case State.new:
      actionProps.severity = 'info';
      actionProps.variant = 'outlined';
      actionProps.text = 'New';
      break;
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
      actionProps.severity = 'error';
      actionProps.variant = 'filled';
      actionProps.text = 'No State Defined';
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
