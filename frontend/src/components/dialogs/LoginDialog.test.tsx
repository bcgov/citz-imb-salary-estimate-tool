import { render, screen } from '@testing-library/react';
import { LoginDialog } from './LoginDialog';

jest.mock('@bcgov/kc-react', () => ({
  useKeycloak: () => ({
    login: jest.fn(),
  }),
}));

describe('LoginDialog', () => {
  it('renders', () => {
    render(<LoginDialog />);
    expect(screen.getByText('Authentication Required')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(
      screen.getByText('To access this application, log in with your IDIR')
    ).toBeInTheDocument();
  });
});
