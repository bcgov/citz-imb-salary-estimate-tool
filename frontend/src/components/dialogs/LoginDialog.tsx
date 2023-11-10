import { useKeycloak } from '@bcgov/kc-react';
import { Typography } from '@mui/material';
import { Dialog } from './Dialog';

export const LoginDialog = () => {
  const { login } = useKeycloak();

  const actions = [
    {
      onClick: () => login({ idpHint: 'idir' }),
      label: 'Login',
    },
  ];

  return (
    <Dialog open actions={actions}>
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
