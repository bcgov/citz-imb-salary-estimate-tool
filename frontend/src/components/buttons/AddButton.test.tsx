import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddButton } from './AddButton';

describe('Button', () => {
  it('renders correctly', () => {
    render(<AddButton />);
    expect(screen.getByTestId('AddCircleOutlineIcon')).toBeInTheDocument();
  });
  it('clickHandler is called when clicked', async () => {
    userEvent.setup();
    const clickHandler = jest.fn();
    render(<AddButton onClick={clickHandler}>Test</AddButton>);
    await act(() =>
      userEvent.click(screen.getByTestId('AddCircleOutlineIcon'))
    );
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
