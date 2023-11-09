import { render, screen } from '@testing-library/react';
import { Dialog } from './Dialog';

describe('Dialog', () => {
  const title = 'Test Dialog';
  const content = 'Test Content';
  const actions = 'Test Actions';
  const onClose = jest.fn();

  it('renders correctly', () => {
    render(<Dialog open title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });
  it('renders content and actions', () => {
    render(
      <Dialog
        open
        title={title}
        actions={<div>{actions}</div>}
        onClose={onClose}
      >
        {content}
      </Dialog>
    );
    expect(screen.getByText(content)).toBeInTheDocument();
    expect(screen.getByText(actions)).toBeInTheDocument();
  });
});
