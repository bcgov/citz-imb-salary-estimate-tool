import { AppBar, Box, Toolbar } from '@mui/material';
import Logo from '../../assets/logo.png';

type NavbarProps = {
  children?: React.ReactNode;
};

export const Navbar = (props: NavbarProps) => {
  const { children } = props;

  return (
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
      <Box role="presentation" sx={{ height: 5 }} bgcolor="#FCBA19" />
    </AppBar>
  );
};

Navbar.defaultProps = {
  children: null,
};

export default Navbar;
