import { render, screen } from '@testing-library/react';
import { AuthenticationDialog } from './AuthenticationDialog';

jest.mock('../../buttons/AuthenticationButton/AuthenticationButton', () => ({
  AuthenticationButton: () => <div>test authentication button</div>,
}));

describe('AuthenticationDialog', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const title = 'test title';
  const onClose = jest.fn();

  it('renders', () => {
    render(<AuthenticationDialog open title={title} onClose={onClose} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(
      screen.getByText('To access this application, log in with your IDIR')
    ).toBeInTheDocument();
    expect(screen.getByText('test authentication button')).toBeInTheDocument();
  });
});
