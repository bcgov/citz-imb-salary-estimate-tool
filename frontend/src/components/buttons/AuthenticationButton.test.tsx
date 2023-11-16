import { useKeycloak } from '@bcgov/citz-imb-kc-react';
import { act, render, screen } from '@testing-library/react';
import { AuthenticationButton } from './AuthenticationButton';

jest.mock('@bcgov/citz-imb-kc-react', () => ({
  useKeycloak: jest.fn(),
}));

describe('AuthenticationButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when the user is not authenticated', () => {
    it('renders the login button', () => {
      (useKeycloak as jest.Mock).mockReturnValue({
        state: undefined,
        login: jest.fn(),
      });

      render(<AuthenticationButton />);
      expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
    });
    it('calls login function when clicked', () => {
      (useKeycloak as jest.Mock).mockReturnValue({
        state: undefined,
        login: jest.fn(),
      });

      render(<AuthenticationButton />);
      act(() => {
        screen.getByRole('button', { name: 'Login' }).click();
      });
      expect(useKeycloak().login).toHaveBeenCalledTimes(1);
    });
  });

  describe('when the user is authenticated', () => {
    it('renders the logout button', () => {
      (useKeycloak as jest.Mock).mockReturnValue({
        state: {
          userInfo: {
            display_name: 'Test User',
          },
        },
        logout: jest.fn(),
      });

      render(<AuthenticationButton />);
      expect(
        screen.getByRole('button', { name: 'Logout' })
      ).toBeInTheDocument();
    });
    it('calls logout function when clicked', () => {
      (useKeycloak as jest.Mock).mockReturnValue({
        state: {
          userInfo: {
            display_name: 'Test User',
          },
        },
        logout: jest.fn(),
      });

      render(<AuthenticationButton />);
      act(() => {
        screen.getByRole('button', { name: 'Logout' }).click();
      });
      expect(useKeycloak().logout).toHaveBeenCalledTimes(1);
    });
  });
});
