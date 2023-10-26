import { AppBar, Box, Toolbar } from '@mui/material';
import Logo from '../assets/logo.png';

type NavbarProps = {
  children: React.ReactNode;
};

const Navbar = (props: NavbarProps) => {
  const { children = null } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box
            component="img"
            sx={{ height: 100, mr: 2 }}
            alt="Government of B.C."
            src={Logo}
          />
          {children}
        </Toolbar>
        <Box sx={{ height: 5 }} bgcolor="#FCBA19" />
      </AppBar>
    </Box>
  );
};

export default Navbar;
