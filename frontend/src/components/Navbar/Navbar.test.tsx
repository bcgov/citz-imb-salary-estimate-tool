import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

jest.mock('../../assets/logo.png', () => 'test-file-stub');
jest.mock('../buttons/AuthenticationButton', () => ({
  AuthenticationButton: () => <div>AuthenticationButton Test</div>,
}));

describe('Navbar', () => {
  it('renders correctly', () => {
    render(<Navbar />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders a Government of B.C. Logo', () => {
    const testAlt = 'Government of B.C.';
    render(<Navbar />);
    expect(screen.getByAltText(testAlt)).toBeInTheDocument();
    expect(screen.getByAltText(testAlt)).toHaveAttribute(
      'src',
      'test-file-stub'
    );
  });

  it('renders title', () => {
    const title = 'Test Title';
    render(<Navbar title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders a color bar', () => {
    render(<Navbar />);
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });

  it('renders an authentication button', () => {
    jest.mock('../buttons/AuthenticationButton', () => ({
      AuthenticationButton: () => <div>AuthenticationButton Test</div>,
    }));
    render(<Navbar />);
    expect(screen.getByText('AuthenticationButton Test')).toBeInTheDocument();
  });
});
