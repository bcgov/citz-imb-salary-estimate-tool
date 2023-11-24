import { Navigate } from 'react-router-dom';
import { AuthenticationDialog } from '../components';
import { useAuthentication } from '../hooks';

export const Home = () => {
  const { isAuthenticated } = useAuthentication();

  if (isAuthenticated) return <Navigate replace to="/Inquiry" />;

  return <AuthenticationDialog open title="Authentication Required" />;
};

export default Home;
