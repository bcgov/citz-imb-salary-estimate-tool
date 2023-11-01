import { useKeycloak } from '@bcgov/kc-react';
import { Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { Dialog } from '../components';
import Button from '../components/Button';

export const Home = () => {
  const { login, state } = useKeycloak();

  const user = state?.userInfo;

  if (!user)
    return (
      <Dialog
        open
        actions={
          <Button onClick={() => login({ idpHint: 'idir' })}>Login</Button>
        }
      >
        <Typography align="center" variant="h3">
          Login Required
        </Typography>
        <Typography align="center" variant="subtitle1">
          To access this application, log in with your IDIR
        </Typography>
      </Dialog>
    );

  return <Navigate replace to="/HMInquiry" />;
};

export default Home;
