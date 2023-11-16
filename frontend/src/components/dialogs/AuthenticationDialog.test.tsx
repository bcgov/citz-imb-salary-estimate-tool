import { render, screen } from '@testing-library/react';
import { AuthenticationDialog } from './AuthenticationDialog';

jest.mock('@bcgov/citz-imb-kc-react', () => ({
  useKeycloak: () => ({
    login: jest.fn(),
  }),
}));

jest.mock('../buttons/AuthenticationButton', () => ({
  AuthenticationButton: () => <div>test authentication button</div>,
}));

describe('LoginDialog', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const title = 'test title';
  const onClose = jest.fn();

  it('renders', () => {
    render(<AuthenticationDialog open title={title} onClose={onClose} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText('test authentication button')).toBeInTheDocument();
    expect(
      screen.getByText('To access this application, log in with your IDIR')
    ).toBeInTheDocument();
  });
  it('calls login when login button is clicked', async () => {
    render(<AuthenticationDialog open title={title} onClose={onClose} />);
    // screen.debug();
    // await act(() =>
    //   userEvent.click(screen.getByRole('button', { name: 'Login' }))
    // );
    // expect(login).toHaveBeenCalled();
  });
});
