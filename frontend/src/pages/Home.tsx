import { useKeycloak } from '@bcgov/kc-react';
import { Typography } from '@mui/material';
import Dialog from '../components/Dialog';
import Button from '../components/Button';

const Home = () => {
  const { login, logout, state } = useKeycloak();

  const user = state?.userInfo;

  const actions = user ? (
    <Button onClick={() => logout()}>Logout</Button>
  ) : (
    <Button onClick={() => login({ idpHint: 'idir' })}>Login</Button>
  );

  return (
    <Dialog open actions={actions}>
      <Typography align="center" variant="h3">
        Login Required
      </Typography>
      <Typography align="center" variant="subtitle1">
        To access this application, log in with your IDIR
      </Typography>
    </Dialog>
  );
};

export default Home;
