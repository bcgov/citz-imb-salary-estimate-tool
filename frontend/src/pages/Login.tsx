import { Navigate } from 'react-router-dom';
import { AuthenticationDialog, Dialog } from '../components';
import { useAuthentication } from '../hooks';

const Login = () => {
  const { isAuthenticated, hasRole } = useAuthentication();

  if (isAuthenticated) {
    if (hasRole('admin') || hasRole('hm') || hasRole('shr') || hasRole('adm'))
      return <Navigate replace to="/" />;
    return (
      <Dialog
        title="You have not been assigned one on the necessary roles to access this application."
        open
      />
    );
  }

  return <AuthenticationDialog open title="Authentication Required" />;
};

export default Login;
