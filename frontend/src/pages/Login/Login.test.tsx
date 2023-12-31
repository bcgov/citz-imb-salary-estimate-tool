/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

jest.mock('react-router-dom', () => ({
  Navigate: () => <div>Navigate</div>,
}));
jest.mock('../../components', () => ({
  AuthenticationDialog: () => <div>Authentication Required</div>,
  Dialog: () => (
    <div>
      You have not been assigned one of the necessary roles to access this
      application.
    </div>
  ),
}));
jest.mock('../../hooks', () => ({
  useAuthentication: jest
    .fn()
    .mockReturnValue({ isAuthenticated: false, hasRole: jest.fn() }),
}));

describe('Login Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders AuthenticationDialog when not authenticated', () => {
    render(<Login />, { wrapper: MemoryRouter });
    expect(screen.getByText('Authentication Required')).toBeInTheDocument();
  });

  it('renders Dialog when authenticated but has no role', () => {
    (require('../../hooks').useAuthentication as jest.Mock).mockReturnValueOnce(
      {
        isAuthenticated: true,
        hasRole: jest.fn(),
      }
    );

    render(<Login />, { wrapper: MemoryRouter });

    expect(
      screen.getByText(
        'You have not been assigned one of the necessary roles to access this application.'
      )
    ).toBeInTheDocument();
  });

  it('renders Navigate to "/Admin" when authenticated with "admin" role', () => {
    (require('../../hooks').useAuthentication as jest.Mock).mockReturnValueOnce(
      {
        isAuthenticated: true,
        hasRole: jest.fn((role) => role === 'admin'),
      }
    );

    render(<Login />, { wrapper: MemoryRouter });

    expect(screen.getByText('Navigate')).toBeInTheDocument();
  });

  it('renders Navigate to "/Inquiry" when authenticated with "hm", "shr", or "adm" role', () => {
    (require('../../hooks').useAuthentication as jest.Mock).mockReturnValueOnce(
      {
        isAuthenticated: true,
        hasRole: jest.fn((role) => ['hm', 'shr', 'adm'].includes(role)),
      }
    );

    render(<Login />, { wrapper: MemoryRouter });

    expect(screen.getByText('Navigate')).toBeInTheDocument();
  });
});
