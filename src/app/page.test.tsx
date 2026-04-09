import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './page';

// Mock fetch API
global.fetch = jest.fn();

describe('Home', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('renders without crashing', () => {
    expect(() => {
      render(<Home />);
    }).not.toThrow();
  });

  it('renders header', () => {
    const { getByRole } = render(<Home />);
    const header = getByRole('heading', { level: 1 });
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('PDF → CBZ');
  });

  it('renders description', () => {
    const { getByText } = render(<Home />);
    expect(getByText(/Convert a PDF into a CBZ archive/)).toBeInTheDocument();
  });

  it('opens the OS file picker flow when DragDropZone is clicked', async () => {
    const user = userEvent.setup();
    const { getByRole, getByLabelText } = render(<Home />);
    const button = getByRole('button', { name: 'Select PDF File' });
    expect(button).toBeInTheDocument();

    const fileInput = getByLabelText('PDF files') as HTMLInputElement;
    const clickSpy = jest.spyOn(fileInput, 'click');

    await user.click(button);

    // The file picker should open via the parent DragDropZone click handler
    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('shows spinner and loading text after file selection', async () => {
    // Mock fetch with a delayed response to give spinner time to render
    (global.fetch as jest.Mock).mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                ok: true,
                blob: () => Promise.resolve(new Blob()),
              }),
            100,
          ),
        ),
    );

    const user = userEvent.setup();
    const { getByLabelText, queryByRole, getByText } = render(<Home />);
    const fileInput = getByLabelText('PDF files');

    // Initial state: spinner not present
    expect(queryByRole('status', { name: 'Loading' })).not.toBeInTheDocument();

    // Simulate file selection
    const file = new File(['dummy'], 'test.pdf', { type: 'application/pdf' });
    await user.upload(fileInput, file);

    // After file selection: spinner present and loading text shown
    await waitFor(() => {
      expect(queryByRole('status', { name: 'Loading' })).toBeInTheDocument();
    });
    expect(getByText('Converting your PDF...')).toBeInTheDocument();
  });

  it('renders link to documentation', () => {
    const { getByRole } = render(<Home />);
    const link = getByRole('link', { name: /View on GitHub/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://github.com/your-repo');
  });

  it('renders feature cards', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Fast')).toBeInTheDocument();
    expect(getByText('Private')).toBeInTheDocument();
    expect(getByText('Compatible')).toBeInTheDocument();
  });
});
