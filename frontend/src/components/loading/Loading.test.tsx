import { render, screen } from '@testing-library/react';
import { Loading } from './Loading';

describe('Loading', () => {
  it('renders the LinearProgress component', () => {
    render(<Loading />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
