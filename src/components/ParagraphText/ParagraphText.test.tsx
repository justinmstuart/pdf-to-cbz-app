import { render, screen } from '@testing-library/react';
import ParagraphText, { ParagraphVariant } from './ParagraphText';

describe('ParagraphText', () => {
  it('renders a <p> with the correct text', () => {
    render(
      <ParagraphText>
        {
          'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.'
        }
      </ParagraphText>,
    );
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.',
      ),
    ).toBeInTheDocument();
  });

  it('renders with default variant', () => {
    const { container } = render(
      <ParagraphText>Test text</ParagraphText>,
    );
    expect(container.firstChild).toHaveClass('font-orbitron');
  });

  it('renders with small variant', () => {
    const { container } = render(
      <ParagraphText variant={ParagraphVariant.Small}>Test text</ParagraphText>,
    );
    expect(container.firstChild).toHaveClass('text-sm');
  });

  it('renders with large variant', () => {
    const { container } = render(
      <ParagraphText variant={ParagraphVariant.Large}>Test text</ParagraphText>,
    );
    expect(container.firstChild).toHaveClass('text-xl');
  });

  it('renders with semibold variant', () => {
    const { container } = render(
      <ParagraphText variant={ParagraphVariant.Semibold}>Test text</ParagraphText>,
    );
    expect(container.firstChild).toHaveClass('font-semibold');
  });

  it('renders with muted variant', () => {
    const { container } = render(
      <ParagraphText variant={ParagraphVariant.Muted}>Test text</ParagraphText>,
    );
    expect(container.firstChild).toHaveClass('text-muted');
  });

  it('renders with accent variant', () => {
    const { container } = render(
      <ParagraphText variant={ParagraphVariant.Accent}>Test text</ParagraphText>,
    );
    expect(container.firstChild).toHaveClass('text-secondary');
  });
});
