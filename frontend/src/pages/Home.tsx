import { Navigate } from 'react-router-dom';
import { AuthenticationDialog, Dialog } from '../components';
import { useAuthentication } from '../hooks';

export const Home = () => {
  const { isAuthenticated, hasRole } = useAuthentication();

  if (isAuthenticated) {
    // if (hasRole('admin')) return <Navigate replace to="/Admin" />;
    if (hasRole('admin')) return <Navigate replace to="/Inquiry" />;
    if (hasRole('hm') || hasRole('shr') || hasRole('adm'))
      return <Navigate replace to="/Inquiry" />;
    return (
      <Dialog
        title="You have not been assigned one on the necessary roles to access this application."
        open
      />
    );
  }

  return <AuthenticationDialog open title="Authentication Required" />;
};

export default Home;
