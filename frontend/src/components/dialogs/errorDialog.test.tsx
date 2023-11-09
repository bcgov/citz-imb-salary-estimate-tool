import { render, screen } from '@testing-library/react';
import { ErrorDialog } from './ErrorDialog';

describe('ErrorDialog', () => {
  it('renders correctly', () => {
    render(<ErrorDialog error={new Error('Test error')} />);
    expect(screen.getByText('Test error')).toBeInTheDocument();
  });
});
