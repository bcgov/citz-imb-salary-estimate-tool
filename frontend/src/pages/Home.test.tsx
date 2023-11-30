import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Home } from './Home'; // Update the path accordingly
import { useAuthentication } from '../hooks';

jest.mock('../hooks', () => ({
  useAuthentication: jest.fn(() => ({
    isAuthenticated: false,
    hasRole: jest.fn(),
  })),
}));

describe('Home Component', () => {
  it('renders AuthenticationDialog when not authenticated', () => {
    const { getByText } = render(<Home />, { wrapper: MemoryRouter });

    expect(getByText('Authentication Required')).toBeInTheDocument();
  });

  it('renders Dialog when authenticated but has no role', () => {
    const { getByText } = render(<Home />, { wrapper: MemoryRouter });
    (useAuthentication as jest.Mock).mockReturnValueOnce({
      isAuthenticated: true,
      hasRole: jest.fn(),
    });

    expect(
      getByText(
        'You have not been assigned one of the necessary roles to access this application.'
      )
    ).toBeInTheDocument();
  });

  it('renders Navigate to "/Admin" when authenticated with "admin" role', () => {
    const { container } = render(<Home />, { wrapper: MemoryRouter });
    (useAuthentication as jest.Mock).mockReturnValueOnce({
      isAuthenticated: true,
      hasRole: jest.fn((role) => role === 'admin'),
    });

    expect(container.querySelector('a[href="/Admin"]')).toBeTruthy();
  });

  it('renders Navigate to "/Inquiry" when authenticated with "hm", "shr", or "adm" role', () => {
    const { container } = render(<Home />, { wrapper: MemoryRouter });
    (useAuthentication as jest.Mock).mockReturnValueOnce({
      isAuthenticated: true,
      hasRole: jest.fn((role) => ['hm', 'shr', 'adm'].includes(role)),
    });

    expect(container.querySelector('a[href="/Inquiry"]')).toBeTruthy();
  });
});
