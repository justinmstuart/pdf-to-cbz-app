import { render, screen } from '@testing-library/react';
import FeatureCard from './FeatureCard';

describe('FeatureCard', () => {
  const defaultProps = {
    icon: '⚡',
    title: 'Fast',
    description: 'Local processing',
    borderColor: 'primary' as const,
  };

  it('renders without crashing', () => {
    render(<FeatureCard {...defaultProps} />);
    expect(screen.getByText('⚡')).toBeInTheDocument();
  });

  it('displays the icon', () => {
    render(<FeatureCard {...defaultProps} />);
    expect(screen.getByText('⚡')).toBeInTheDocument();
  });

  it('displays the title', () => {
    render(<FeatureCard {...defaultProps} />);
    expect(screen.getByText('Fast')).toBeInTheDocument();
  });

  it('displays the description', () => {
    render(<FeatureCard {...defaultProps} />);
    expect(screen.getByText('Local processing')).toBeInTheDocument();
  });

  it('applies primary border color class', () => {
    const { container } = render(<FeatureCard {...defaultProps} borderColor="primary" />);
    const card = container.firstChild;
    expect(card).toHaveClass('border-primary/20');
  });

  it('applies secondary border color class', () => {
    const { container } = render(<FeatureCard {...defaultProps} borderColor="secondary" />);
    const card = container.firstChild;
    expect(card).toHaveClass('border-secondary/20');
  });

  it('applies accent border color class', () => {
    const { container } = render(<FeatureCard {...defaultProps} borderColor="accent" />);
    const card = container.firstChild;
    expect(card).toHaveClass('border-brand-accent/20');
  });
});
