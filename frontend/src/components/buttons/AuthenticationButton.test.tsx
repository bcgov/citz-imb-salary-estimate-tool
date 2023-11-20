import { act, render, screen } from '@testing-library/react';
import { useAuthentication } from '../../hooks';
import { AuthenticationButton } from './AuthenticationButton';

jest.mock('../../hooks', () => ({
  useAuthentication: jest.fn(),
}));

describe('AuthenticationButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when the user is not authenticated', () => {
    it('renders the login button', () => {
      (useAuthentication as jest.Mock).mockReturnValue({
        isAuthenticated: false,
        login: jest.fn(),
      });

      render(<AuthenticationButton />);
      expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
    });
    it('calls login function when clicked', () => {
      (useAuthentication as jest.Mock).mockReturnValue({
        isAuthenticated: false,
        login: jest.fn(),
      });

      render(<AuthenticationButton />);
      act(() => {
        screen.getByRole('button', { name: 'Login' }).click();
      });
      expect(useAuthentication().login).toHaveBeenCalledTimes(1);
    });
  });

  describe('when the user is authenticated', () => {
    it('renders the logout button', () => {
      (useAuthentication as jest.Mock).mockReturnValue({
        isAuthenticated: true,
        logout: jest.fn(),
      });

      render(<AuthenticationButton />);
      expect(
        screen.getByRole('button', { name: 'Logout' })
      ).toBeInTheDocument();
    });
    it('calls logout function when clicked', () => {
      (useAuthentication as jest.Mock).mockReturnValue({
        isAuthenticated: true,
        logout: jest.fn(),
      });

      render(<AuthenticationButton />);
      act(() => {
        screen.getByRole('button', { name: 'Logout' }).click();
      });
      expect(useAuthentication().logout).toHaveBeenCalledTimes(1);
    });
  });
});
