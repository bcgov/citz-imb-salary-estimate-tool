import { useAuthentication } from '../../hooks/useAuthentication/useAuthentication';
import { Button } from './Button';

export const AuthenticationButton = () => {
  const { isAuthenticated, login, logout } = useAuthentication();

  if (isAuthenticated) return <Button onClick={() => logout()}>Logout</Button>;

  return <Button onClick={() => login({ idpHint: 'idir' })}>Login</Button>;
};

export default AuthenticationButton;
