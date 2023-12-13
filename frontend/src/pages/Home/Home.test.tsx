import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Home from './Home';
import { useAuthentication } from '../../hooks';

jest.mock('../../hooks', () => ({
  useAuthentication: jest.fn(),
}));

describe('Home', () => {
  beforeEach(() => {
    // Reset the mock implementation before each test
    jest.clearAllMocks();
  });

  it('renders the Inquiries tab by default', () => {
    // Mock isAuthenticated as true and hasRole as a function that returns false
    (useAuthentication as jest.Mock).mockReturnValueOnce({
      isAuthenticated: true,
      hasRole: () => false,
    });
    jest.mock('../../hooks', () => ({
      useAuthentication: jest
        .fn()
        .mockReturnValue({ isAuthenticated: true, hasRole: () => false }),
    }));

    render(
      <MemoryRouter initialEntries={['/home']}>
        <Route path="/home">
          <Home />
        </Route>
      </MemoryRouter>
    );

    expect(screen.getByText('Inquiries')).toBeInTheDocument();
    expect(screen.queryByText('Users')).toBeNull();
  });

  it('renders the Users tab when the user has the admin role', () => {
    // Mock isAuthenticated as true and hasRole as a function that returns true for 'admin'
    jest.mock('../../hooks', () => ({
      useAuthentication: jest.fn().mockReturnValue({
        isAuthenticated: true,
        hasRole: (role) => role === 'admin',
      }),
    }));

    render(
      <MemoryRouter initialEntries={['/home']}>
        <Route path="/home">
          <Home />
        </Route>
      </MemoryRouter>
    );

    expect(screen.getByText('Inquiries')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
  });

  it('redirects to /login when not authenticated', () => {
    // Mock isAuthenticated as false
    (useAuthentication as jest.Mock).mockReturnValueOnce({
      isAuthenticated: false,
    });
    jest.mock('../../hooks', () => ({
      useAuthentication: jest.fn().mockReturnValue({ isAuthenticated: false }),
    }));

    render(
      <MemoryRouter initialEntries={['/home']}>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">Login Page</Route>
      </MemoryRouter>
    );

    // Verify that the component redirects to the login page
    expect(screen.getByText('Login Page')).toBeInTheDocument();
  });

  it('switches tabs when clicking on Users tab', () => {
    // Mock isAuthenticated as true and hasRole as a function that returns true for 'admin'
    jest.mock('../../hooks', () => ({
      useAuthentication: jest.fn().mockReturnValue({
        isAuthenticated: true,
        hasRole: (role) => role === 'admin',
      }),
    }));

    render(
      <MemoryRouter initialEntries={['/home']}>
        <Route path="/home">
          <Home />
        </Route>
      </MemoryRouter>
    );

    // Click on the Users tab
    fireEvent.click(screen.getByText('Users'));

    // Verify that the Users tab is selected
    expect(screen.getByText('Users')).toHaveAttribute('aria-selected', 'true');
  });
});
