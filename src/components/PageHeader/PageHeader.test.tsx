import { render, screen } from '@testing-library/react';
import PageHeader from './PageHeader';

describe('PageHeader', () => {
  it('renders without crashing', () => {
    render(<PageHeader title="PDF → CBZ" />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(<PageHeader title="PDF → CBZ" />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('PDF → CBZ');
  });

  it('renders the gradient divider', () => {
    const { container } = render(<PageHeader title="PDF → CBZ" />);
    const divider = container.querySelector('.bg-gradient-to-r');
    expect(divider).toBeInTheDocument();
  });
});
