import { render, screen } from '@testing-library/react';
import { Home } from './Home';

jest.mock('react-router-dom', () => ({
  Navigate: () => <div>Navigate</div>,
}));
jest.mock('../components', () => ({
  AuthenticationDialog: () => <div>Login Dialog</div>,
}));

describe('Home ', () => {
  it('should render', () => {
    render(<Home />);
    expect(screen.getByText('Login Dialog')).toBeInTheDocument();
  });
  it('should redirect when authenticated', () => {
    render(<Home isAuthenticated />);
    expect(screen.getByText('Navigate')).toBeInTheDocument();
  });
});
