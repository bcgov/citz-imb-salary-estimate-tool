import { Chip, Typography } from '@mui/material';
import { State, FieldProps } from '../../../types';

export const StatusField = (props: FieldProps) => {
  const { label, value, ...otherProps } = props;

  // TODO: fix css alignment & presentation

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
      actionProps.variant = 'filled';
      actionProps.text = 'Submitted';

      break;
    case State.reviewed:
      actionProps.severity = 'warning';
      actionProps.variant = 'filled';
      actionProps.text = 'Reviewed';

      break;
    case State.approved:
      actionProps.severity = 'success';
      actionProps.variant = 'filled';
      actionProps.text = 'Approved';

      break;
    case State.rejected:
      actionProps.severity = 'error';
      actionProps.variant = 'filled';
      actionProps.text = 'Rejected';

      break;
    default:
      actionProps.severity = 'info';
      actionProps.variant = 'outlined';
      actionProps.text = 'New';
  }

  return (
    <>
      <Typography variant="caption" component="div">
        {label}
      </Typography>
      <Chip
        label={actionProps.text}
        color={actionProps.severity}
        variant={actionProps.variant}
        {...otherProps}
      />
    </>
  );
};

export default StatusField;
