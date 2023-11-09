import { Navigate } from 'react-router-dom';
import { LoginDialog } from '../components';

interface HomeProps extends React.HTMLAttributes<HTMLDivElement> {
  isAuthenticated?: boolean;
}

export const Home = (props: HomeProps) => {
  const { isAuthenticated } = props;

  if (isAuthenticated) return <Navigate replace to="/Inquiry" />;

  return <LoginDialog />;
};

Home.defaultProps = {
  isAuthenticated: false,
};

export default Home;
