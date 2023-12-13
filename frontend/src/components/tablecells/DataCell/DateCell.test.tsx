import { render, screen } from '@testing-library/react';
import { DateCell } from './DateCell';

describe('DateCell', () => {
  it('renders the date in the correct format', () => {
    const testDate = '2022-12-01T00:00:00.000-0800'; // December 1, 2022, 12:00:00 AM PST

    render(<DateCell value={testDate} />);

    expect(screen.getByText('2022-12-01')).toBeInTheDocument();
  });
});
