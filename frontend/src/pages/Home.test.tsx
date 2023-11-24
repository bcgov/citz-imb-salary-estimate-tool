import { render, screen } from '@testing-library/react';
import { useAuthentication } from '../hooks';
import { Home } from './Home';

jest.mock('react-router-dom', () => ({
  Navigate: () => <div>Navigate</div>,
}));
jest.mock('../components', () => ({
  AuthenticationDialog: () => <div>Login Dialog</div>,
}));
jest.mock('../hooks', () => ({
  useAuthentication: jest.fn().mockReturnValue({ isAuthenticated: false }),
}));

describe('Home ', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render Login Dialog when not authenticated', () => {
    (useAuthentication as jest.Mock).mockReturnValueOnce({
      isAuthenticated: false,
    });

    render(<Home />);
    expect(screen.getByText('Login Dialog')).toBeInTheDocument();
  });
  it('should redirect when authenticated', () => {
    (useAuthentication as jest.Mock).mockReturnValueOnce({
      isAuthenticated: true,
    });

    render(<Home />);
    expect(screen.getByText('Navigate')).toBeInTheDocument();
  });
});
