import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  it('clickHandler is called when clicked', async () => {
    userEvent.setup();
    const clickHandler = jest.fn();
    render(<Button onClick={clickHandler}>Test</Button>);
    await act(() =>
      userEvent.click(screen.getByRole('button', { name: 'Test' }))
    );
    expect(clickHandler).toHaveBeenCalled();
  });
});
