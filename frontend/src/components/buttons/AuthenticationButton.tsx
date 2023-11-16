import { useKeycloak } from '@bcgov/kc-react';
import { Button } from './Button';

export const AuthenticationButton = () => {
  const { state, login, logout } = useKeycloak();
  const isAuthenticated: boolean = !!state?.userInfo;

  if (isAuthenticated) return <Button onClick={() => logout()}>Logout</Button>;

  return <Button onClick={() => login({ idpHint: 'idir' })}>Login</Button>;
};

export default AuthenticationButton;
