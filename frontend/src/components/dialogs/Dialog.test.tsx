import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dialog } from './Dialog';

describe('Dialog', () => {
  const title = 'Test Dialog';
  const content = 'Test Content';
  const actions = [{ onClick: jest.fn(), label: 'Test Action' }];
  const onClose = jest.fn();

  it('renders correctly', () => {
    render(<Dialog open title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });
  it('renders content and actions', () => {
    render(
      <Dialog open title={title} actions={actions} onClose={onClose}>
        {content}
      </Dialog>
    );
    expect(screen.getByText(content)).toBeInTheDocument();
    expect(screen.getByText('Test Action')).toBeInTheDocument();
  });
  it('calls action clickhandler when action clicked', async () => {
    render(
      <Dialog open title={title} actions={actions} onClose={onClose}>
        {content}
      </Dialog>
    );
    await act(() =>
      userEvent.click(screen.getByRole('button', { name: 'Test Action' }))
    );
    expect(actions[0].onClick).toHaveBeenCalledTimes(1);
  });
});
