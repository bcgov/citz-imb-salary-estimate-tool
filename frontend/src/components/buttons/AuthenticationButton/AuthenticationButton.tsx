import { useAuthentication } from '../../../hooks/useAuthentication/useAuthentication';
import { Button } from '../Button/Button';

export const AuthenticationButton = () => {
  const { isAuthenticated, login, logout } = useAuthentication();

  const buttonProps = {
    children: 'Login',
    onClick: () => login({ idpHint: 'idir' }),
  };

  if (isAuthenticated) {
    buttonProps.children = 'Logout';
    buttonProps.onClick = () => logout();
  }

  return (
    <Button variant="contained" color="info" disableRipple {...buttonProps} />
  );
};

export default AuthenticationButton;
