import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  const mockOnClick = jest.fn();

  it('renders the label', () => {
    render(<Button label="Click me" onClick={mockOnClick} />);
    expect(
      screen.getByRole('button', { name: 'Click me' }),
    ).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const handleClick = jest.fn();
    render(<Button label="Save" onClick={handleClick} />);
    await userEvent.click(screen.getByRole('button', { name: 'Save' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when the disabled prop is set', () => {
    render(<Button label="Submit" onClick={mockOnClick} disabled />);
    expect(screen.getByRole('button', { name: 'Submit' })).toBeDisabled();
  });
});
