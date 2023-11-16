import { useKeycloak } from '@bcgov/citz-imb-kc-react';
import { render, screen } from '@testing-library/react';
import { AuthenticationButton } from './AuthenticationButton';

jest.mock('@bcgov/citz-imb-kc-react', () => ({
  useKeycloak: jest.fn(),
}));

describe('AuthenticationButton', () => {
  it('renders the login button when the user is not authenticated', () => {
    (useKeycloak as jest.Mock).mockReturnValue({
      state: undefined,
    });

    render(<AuthenticationButton />);
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

  it('renders the logout button when the user is authenticated', () => {
    (useKeycloak as jest.Mock).mockReturnValue({
      state: {
        userInfo: {
          display_name: 'Test User',
        },
      },
    });

    render(<AuthenticationButton />);
    expect(screen.getByRole('button', { name: 'Logout' })).toBeInTheDocument();
  });
});
