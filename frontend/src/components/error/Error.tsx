import { Alert } from '@mui/material';
import { Dialog } from '../dialog/Dialog';

interface ErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  error: Error;
}

export const Error = (props: ErrorProps) => {
  const { error } = props;

  return (
    <Dialog open title="Error">
      <Alert severity="error">{error.message}</Alert>
    </Dialog>
  );
};

export default Error;
