import { render, screen } from '@testing-library/react';
import { Inquiry } from './Inquiry';
import { useInquiry } from '../hooks';

jest.mock('../hooks', () => ({
  useInquiry: jest.fn(),
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
  it('redirects if not authenticated', () => {
    (useInquiry as jest.Mock).mockReturnValueOnce({
      data: [],
      columns: [],
      isLoading: false,
      isError: false,
      error: '',
    });
    render(<Inquiry />);
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
    render(<Inquiry isAuthenticated />);
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
    render(<Inquiry isAuthenticated />);
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
    render(<Inquiry isAuthenticated />);
    expect(screen.getByText('ErrorDialog')).toBeInTheDocument();
  });
});
