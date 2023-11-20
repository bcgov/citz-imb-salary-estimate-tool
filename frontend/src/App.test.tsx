import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { useAuthentication } from './hooks';

jest.mock('./hooks', () => ({
  useAuthentication: jest.fn(),
}));
jest.mock('./pages', () => ({
  Home: () => <div>Home Test</div>,
  Inquiry: () => <div>Inquiry Test</div>,
}));
jest.mock('./components', () => ({
  Navbar: () => <div>Navbar Test</div>,
  Footer: () => <div>Footer Test</div>,
}));

describe('App', () => {
  it('renders correctly with Navbar', () => {
    const queryClient = new QueryClient();

    (useAuthentication as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      KeycloakProvider: ({ children }: { children: ReactNode }) => (
        <div>{children}</div>
      ),
    });

    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    );

    expect(screen.getByText('Navbar Test')).toBeInTheDocument();
  });

  it('renders the Footer', () => {
    const queryClient = new QueryClient();

    (useAuthentication as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      KeycloakProvider: ({ children }: { children: ReactNode }) => (
        <div>{children}</div>
      ),
    });

    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    );

    expect(screen.getByText('Footer Test')).toBeInTheDocument();
  });

  it('renders the Home page', () => {
    const queryClient = new QueryClient();

    (useAuthentication as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      KeycloakProvider: ({ children }: { children: ReactNode }) => (
        <div>{children}</div>
      ),
    });

    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    );

    expect(screen.getByText('Home Test')).toBeInTheDocument();
  });
});
