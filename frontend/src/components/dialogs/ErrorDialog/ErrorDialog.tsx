import { Alert } from '@mui/material';
import { Dialog } from '../Dialog/Dialog';

interface ErrorDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  error: Error;
}

export const ErrorDialog = (props: ErrorDialogProps) => {
  const { error } = props;

  return (
    <Dialog open title="Error">
      <Alert severity="error">{error.message}</Alert>
    </Dialog>
  );
};

export default ErrorDialog;
