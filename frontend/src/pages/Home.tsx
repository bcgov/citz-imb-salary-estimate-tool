import { Navigate } from 'react-router-dom';
import { AuthenticationDialog } from '../components';

interface HomeProps extends React.HTMLAttributes<HTMLDivElement> {
  isAuthenticated?: boolean;
}

export const Home = (props: HomeProps) => {
  const { isAuthenticated } = props;

  if (isAuthenticated) return <Navigate replace to="/Inquiry" />;

  return <AuthenticationDialog open title="Authentication Required" />;
};

Home.defaultProps = {
  isAuthenticated: false,
};

export default Home;
