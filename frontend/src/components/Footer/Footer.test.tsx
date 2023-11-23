import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the Footer component', () => {
    render(<Footer />);

    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });
});
