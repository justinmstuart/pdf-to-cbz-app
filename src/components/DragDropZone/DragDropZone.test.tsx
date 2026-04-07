import { render, screen, fireEvent } from '@testing-library/react';
import DragDropZone from './DragDropZone';

describe('DragDropZone', () => {
  const mockHandlers = {
    onDragOver: jest.fn(),
    onDragLeave: jest.fn(),
    onDrop: jest.fn(),
    onClick: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<DragDropZone {...mockHandlers} isDragging={false} loading={false} />);
    expect(screen.getByText('Drop file here or click to browse')).toBeInTheDocument();
  });

  it('displays default text when not dragging', () => {
    render(<DragDropZone {...mockHandlers} isDragging={false} loading={false} />);
    expect(screen.getByText('Drop file here or click to browse')).toBeInTheDocument();
  });

  it('displays drag text when dragging', () => {
    render(<DragDropZone {...mockHandlers} isDragging={true} loading={false} />);
    expect(screen.getByText('Drop your file here!')).toBeInTheDocument();
  });

  it('displays loading text when loading', () => {
    render(<DragDropZone {...mockHandlers} isDragging={false} loading={true} />);
    expect(screen.getByText('Processing...')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const { container } = render(
      <DragDropZone {...mockHandlers} isDragging={false} loading={false} />
    );
    const zone = container.firstChild as HTMLElement;
    fireEvent.click(zone);
    expect(mockHandlers.onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when loading', () => {
    const { container } = render(
      <DragDropZone {...mockHandlers} isDragging={false} loading={true} />
    );
    const zone = container.firstChild as HTMLElement;
    fireEvent.click(zone);
    expect(mockHandlers.onClick).not.toHaveBeenCalled();
  });

  it('calls onDragOver when dragging over', () => {
    const { container } = render(
      <DragDropZone {...mockHandlers} isDragging={false} loading={false} />
    );
    const zone = container.firstChild as HTMLElement;
    fireEvent.dragOver(zone);
    expect(mockHandlers.onDragOver).toHaveBeenCalledTimes(1);
  });

  it('calls onDragLeave when drag leaves', () => {
    const { container } = render(
      <DragDropZone {...mockHandlers} isDragging={false} loading={false} />
    );
    const zone = container.firstChild as HTMLElement;
    fireEvent.dragLeave(zone);
    expect(mockHandlers.onDragLeave).toHaveBeenCalledTimes(1);
  });

  it('calls onDrop when file is dropped', () => {
    const { container } = render(
      <DragDropZone {...mockHandlers} isDragging={false} loading={false} />
    );
    const zone = container.firstChild as HTMLElement;
    fireEvent.drop(zone);
    expect(mockHandlers.onDrop).toHaveBeenCalledTimes(1);
  });

  it('displays custom text when provided', () => {
    render(
      <DragDropZone
        {...mockHandlers}
        isDragging={false}
        loading={false}
        defaultText="Custom default text"
        dragText="Custom drag text"
        helperText="Custom helper text"
      />
    );
    expect(screen.getByText('Custom default text')).toBeInTheDocument();
    expect(screen.getByText('Custom helper text')).toBeInTheDocument();
  });

  it('applies dragging styles when isDragging is true', () => {
    const { container } = render(
      <DragDropZone {...mockHandlers} isDragging={true} loading={false} />
    );
    const zone = container.firstChild as HTMLElement;
    expect(zone).toHaveClass('border-secondary');
  });

  it('applies default styles when not dragging', () => {
    const { container } = render(
      <DragDropZone {...mockHandlers} isDragging={false} loading={false} />
    );
    const zone = container.firstChild as HTMLElement;
    expect(zone).toHaveClass('border-primary/40');
  });
});
