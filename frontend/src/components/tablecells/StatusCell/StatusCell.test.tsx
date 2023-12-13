import { render, screen } from '@testing-library/react';
import { StatusCell } from './StatusCell';
import { State } from '../../../types';

describe('StatusCell', () => {
  it('renders the correct status', () => {
    render(<StatusCell value={State.new} />);

    expect(screen.getByRole('alert')).toHaveTextContent('New');
  });

  describe('renders the correct status', () => {
    const testCases = [
      { state: State.new, expectedText: 'New' },
      { state: State.draft, expectedText: 'Draft' },
      { state: State.submitted, expectedText: 'Submitted' },
      { state: State.reviewed, expectedText: 'Reviewed' },
      { state: State.approved, expectedText: 'Approved' },
      { state: State.rejected, expectedText: 'Rejected' },
      { state: -1 as State, expectedText: 'No State Defined' },
    ];

    testCases.forEach(({ state, expectedText }) => {
      it(`for ${State[state]}`, () => {
        render(<StatusCell value={state} />);

        expect(screen.getByRole('alert')).toHaveTextContent(expectedText);
      });
    });
  });
});
