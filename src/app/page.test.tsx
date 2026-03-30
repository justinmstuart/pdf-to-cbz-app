import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './page';

describe('Home', () => {
  it('renders without crashing', () => {
    expect(() => {
      render(<Home />);
    }).not.toThrow();
  });

  it('renders header', () => {
    const { getByRole } = render(<Home />);
    const header = getByRole('heading', { level: 1 });
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('PDF -> CBZ');
  });

  it('renders description', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Get started by editing')).toBeInTheDocument();
  });

  it('opens the OS file picker flow when button is clicked', async () => {
    const user = userEvent.setup();
    const { getByRole, getByLabelText } = render(<Home />);
    const button = getByRole('button', { name: 'Convert' });
    expect(button).toBeInTheDocument();

    const fileInput = getByLabelText('PDF files') as HTMLInputElement;
    const clickSpy = jest.spyOn(fileInput, 'click');

    await user.click(button);

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('disables the button and shows a spinner only after file selection', async () => {
    const user = userEvent.setup();
    const { getByRole, getByLabelText, queryByRole } = render(<Home />);
    const button = getByRole('button', { name: 'Convert' });
    const fileInput = getByLabelText('PDF files');

    // Initial state: button enabled, spinner not present
    expect(button).not.toBeDisabled();
    expect(queryByRole('status', { name: 'Loading' })).not.toBeInTheDocument();

    // Click the button: should open file picker, but not disable or show spinner yet
    await user.click(button);
    expect(button).not.toBeDisabled();
    expect(queryByRole('status', { name: 'Loading' })).not.toBeInTheDocument();

    // Simulate file selection
    const file = new File(['dummy'], 'test.pdf', { type: 'application/pdf' });
    await user.upload(fileInput, file);

    // After file selection: spinner present
    expect(queryByRole('status', { name: 'Loading' })).toBeInTheDocument();
    // After file selection: button is not present
    expect(button).not.toBeInTheDocument();
  });

  it('renders link to documentation', () => {
    const { getByRole } = render(<Home />);
    const link = getByRole('link', { name: 'Github' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://github.com/your-repo');
  });
});
