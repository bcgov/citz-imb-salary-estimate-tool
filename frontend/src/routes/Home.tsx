import { Button, Dialog } from '../components';
import { Typography } from '@mui/material';

export const Home = () => {

  const handleClose = () => {
    alert('Some day this will work');
  };

  const actions = <Button onClick={handleClose} color="primary">Login</Button>;


  return <Dialog open={true} actions={actions} >
    <Typography align='center' variant='h3'>Login Required</Typography>
    <Typography align='center' variant='subtitle1'>To access this application, log in with your IDIR</Typography>
  </Dialog>;
};
