import { render } from '@testing-library/react';
import GitHubIcon from './GitHubIcon';

describe('GitHubIcon', () => {
  it('renders without crashing', () => {
    const { container } = render(<GitHubIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<GitHubIcon className="custom-class" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('custom-class');
  });

  it('applies additional SVG props', () => {
    const { container } = render(<GitHubIcon data-testid="github-icon" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('data-testid', 'github-icon');
  });

  it('has correct viewBox', () => {
    const { container } = render(<GitHubIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });
});
