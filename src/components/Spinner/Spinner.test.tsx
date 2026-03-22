import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner', () => {
  it('renders the spinner', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('has the correct aria-label', () => {
    render(<Spinner aria-label="Loading" />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading');
  });
});
