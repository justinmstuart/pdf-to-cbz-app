import { render, screen } from '@testing-library/react';
import HeaderText, { HeaderType } from './HeaderText';

describe('HeaderText', () => {
  it('renders an <h1>', () => {
    render(<HeaderText type={HeaderType.H1} />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('displays the correct title', () => {
    render(<HeaderText type={HeaderType.H1}>Lorem ipsum dolor</HeaderText>);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Lorem ipsum dolor',
    );
  });
});
