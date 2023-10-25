import { AppBar, Box, Toolbar } from '@mui/material';
import Logo from '../assets/logo.png';

type NavbarProps = {
  children?: React.ReactNode;
};

export const Navbar = (props: NavbarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ 'background-color': '#003366' }}>
        <Toolbar>
          <Box
            component="img"
            sx={{ height: 100, mr: 2 }}
            alt="Government of B.C."
            src={Logo}
          />
          {props.children}
        </Toolbar>
        <Box sx={{ height: 5, 'background-color': '#FCBA19' }} />
      </AppBar>
    </Box>
  );
};
