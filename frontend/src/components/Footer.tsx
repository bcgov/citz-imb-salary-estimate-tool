import { Box, Toolbar } from '@mui/material';

type FooterProps = {
  children?: React.ReactNode;
};

export const Footer = (props: FooterProps) => {
  return (
    <Box sx={{ bottom: '0px' }} bgcolor={'primary.main'}>
      <Box sx={{ height: 5 }} bgcolor={'#FCBA19'} />
      <Toolbar sx={{ height: '25px' }}>{props.children}</Toolbar>
    </Box>
  );
};
