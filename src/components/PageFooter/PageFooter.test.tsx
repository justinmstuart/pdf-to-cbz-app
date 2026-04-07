import { render, screen } from '@testing-library/react';
import PageFooter from './PageFooter';

describe('PageFooter', () => {
  it('renders without crashing', () => {
    render(<PageFooter githubHref="https://github.com/your-repo" />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('renders the default link label', () => {
    render(<PageFooter githubHref="https://github.com/your-repo" />);
    expect(screen.getByText('View on GitHub')).toBeInTheDocument();
  });

  it('renders a custom link label', () => {
    render(
      <PageFooter
        githubHref="https://github.com/your-repo"
        linkLabel="GitHub"
      />
    );
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  it('renders the correct href', () => {
    render(<PageFooter githubHref="https://github.com/your-repo" />);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://github.com/your-repo');
  });

  it('renders the GitHub icon', () => {
    const { container } = render(
      <PageFooter githubHref="https://github.com/your-repo" />
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
