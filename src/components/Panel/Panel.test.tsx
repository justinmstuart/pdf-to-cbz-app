import { render } from '@testing-library/react';
import Panel, { PanelVariant } from './Panel';

describe('Panel', () => {
  it('renders children', () => {
    const { getByText } = render(
      <Panel variant={PanelVariant.Card}>
        <p>Hello</p>
      </Panel>,
    );
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('applies base width classes to card variant', () => {
    const { container } = render(
      <Panel variant={PanelVariant.Card}>content</Panel>,
    );
    expect(container.firstChild).toHaveClass('w-full', 'max-w-2xl');
  });

  it('applies card variant classes', () => {
    const { container } = render(
      <Panel variant={PanelVariant.Card}>content</Panel>,
    );
    expect(container.firstChild).toHaveClass('border-primary/30', 'rounded-lg');
  });

  it('applies base width classes to grid variant', () => {
    const { container } = render(
      <Panel variant={PanelVariant.CardDotted}>content</Panel>,
    );
    expect(container.firstChild).toHaveClass('w-full', 'max-w-2xl');
  });

  it('applies grid variant classes', () => {
    const { container } = render(
      <Panel variant={PanelVariant.CardDotted}>content</Panel>,
    );
    expect(container.firstChild).toHaveClass(
      'grid',
      'grid-cols-1',
      'md:grid-cols-3',
    );
  });
});
