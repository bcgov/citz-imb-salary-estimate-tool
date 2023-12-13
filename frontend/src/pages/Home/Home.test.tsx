import { render, screen } from '@testing-library/react';
import Home from './Home';
import { useInquiry, useAuthentication } from '../../hooks';

jest.mock('../hooks', () => ({
  useInquiry: jest.fn(),
  useAuthentication: jest.fn().mockReturnValue({ isAuthenticated: false }),
}));
jest.mock('react-router-dom', () => ({
  Navigate: () => <div>Navigate</div>,
}));
jest.mock('../components', () => ({
  ErrorDialog: () => <div>ErrorDialog</div>,
  Loading: () => <div>Loading</div>,
  TableContainer: () => <div>TableContainer</div>,
}));

describe('Inquiry', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('redirects if not authenticated', () => {
    (useInquiry as jest.Mock).mockReturnValueOnce({
      data: [],
      columns: [],
      isLoading: false,
      isError: false,
      error: '',
    });
    (useAuthentication as jest.Mock).mockReturnValueOnce({
      isAuthenticated: false,
    });

    render(<Home />);
    expect(screen.getByText('Navigate')).toBeInTheDocument();
  });

  it('renders correctly if authenticated', () => {
    (useInquiry as jest.Mock).mockReturnValueOnce({
      data: [],
      columns: [],
      isLoading: false,
      isError: false,
      error: '',
    });
    (useAuthentication as jest.Mock).mockReturnValueOnce({
      isAuthenticated: true,
    });

    render(<Home />);
    expect(screen.getByText('TableContainer')).toBeInTheDocument();
  });
  it('renders a loading screen if loading', () => {
    (useInquiry as jest.Mock).mockReturnValueOnce({
      data: [],
      columns: [],
      isLoading: true,
      isError: false,
      error: '',
    });
    (useAuthentication as jest.Mock).mockReturnValueOnce({
      isAuthenticated: true,
    });

    render(<Home />);
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });
  it('renders an Error Dialog if an error', () => {
    (useInquiry as jest.Mock).mockReturnValueOnce({
      data: [],
      columns: [],
      isLoading: false,
      isError: true,
      error: 'ErrorDialog',
    });
    (useAuthentication as jest.Mock).mockReturnValueOnce({
      isAuthenticated: true,
    });

    render(<Home />);
    expect(screen.getByText('ErrorDialog')).toBeInTheDocument();
  });
});
