import { AppBar, Box, Toolbar, Typography, Stack } from '@mui/material';
import { AuthenticationButton } from '../buttons/AuthenticationButton';
import Logo from '../../assets/logo.png';
import { useAuthentication } from '../../hooks/useAuthentication/useAuthentication';

type NavbarProps = {
  title?: string;
};

export const Navbar = (props: NavbarProps) => {
  const { title } = props;
  const { isAuthenticated } = useAuthentication();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          component="img"
          sx={{ height: 100, mr: 2 }}
          alt="Government of B.C."
          src={Logo}
        />
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Stack direction="row" spacing={2}>
          {isAuthenticated ? <AuthenticationButton /> : null}
        </Stack>
      </Toolbar>
      <Box role="presentation" sx={{ height: 5 }} bgcolor="#FCBA19" />
    </AppBar>
  );
};

Navbar.defaultProps = {
  title: '',
};

export default Navbar;
