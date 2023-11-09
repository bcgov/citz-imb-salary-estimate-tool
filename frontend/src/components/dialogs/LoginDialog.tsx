import { useKeycloak } from '@bcgov/kc-react';
import { Typography } from '@mui/material';
import { Button } from '../buttons/Button';
import { Dialog } from './Dialog';

export const LoginDialog = () => {
  const { login } = useKeycloak();

  return (
    <Dialog
      open
      actions={
        <Button onClick={() => login({ idpHint: 'idir' })}>Login</Button>
      }
    >
      <Typography align="center" variant="h3">
        Authentication Required
      </Typography>
      <Typography align="center" variant="subtitle1">
        To access this application, log in with your IDIR
      </Typography>
    </Dialog>
  );
};

export default LoginDialog;
