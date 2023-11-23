import { Box, Toolbar } from '@mui/material';

export const Footer = () => {
  return (
    <Box role="presentation" sx={{ bottom: '0px' }} bgcolor="primary.main">
      <Box sx={{ height: 5 }} bgcolor="#FCBA19" />
      <Toolbar sx={{ height: '25px' }} />
    </Box>
  );
};

export default Footer;
