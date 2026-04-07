import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import DragDropZone from './DragDropZone';
import Spinner from '../Spinner/Spinner';

const meta: Meta<typeof DragDropZone> = {
  title: 'Components/DragDropZone',
  component: DragDropZone,
  tags: ['autodocs'],
  argTypes: {
    isDragging: { control: 'boolean' },
    loading: { control: 'boolean' },
    defaultText: { control: 'text' },
    dragText: { control: 'text' },
    helperText: { control: 'text' },
    loadingText: { control: 'text' },
    buttonLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof DragDropZone>;

const mockHandlers = {
  onDragOver: (e: React.DragEvent) => {
    e.preventDefault();
    console.log('Drag over');
  },
  onDragLeave: (e: React.DragEvent) => {
    e.preventDefault();
    console.log('Drag leave');
  },
  onDrop: (e: React.DragEvent) => {
    e.preventDefault();
    console.log('Drop');
  },
  onClick: () => console.log('Click'),
};

export const Default: Story = {
  args: {
    isDragging: false,
    loading: false,
    ...mockHandlers,
  },
  render: (args) => (
    <div className="bg-background p-6">
      <DragDropZone {...args} />
    </div>
  ),
};

export const Dragging: Story = {
  args: {
    isDragging: true,
    loading: false,
    ...mockHandlers,
  },
  render: (args) => (
    <div className="bg-background p-6">
      <DragDropZone {...args} />
    </div>
  ),
};

export const Loading: Story = {
  args: {
    isDragging: false,
    loading: true,
    icon: <Spinner />,
    ...mockHandlers,
  },
  render: (args) => (
    <div className="bg-background p-6">
      <DragDropZone {...args} />
    </div>
  ),
};

export const CustomText: Story = {
  args: {
    isDragging: false,
    loading: false,
    defaultText: 'Upload your document',
    dragText: 'Release to upload',
    helperText: 'Maximum file size: 10MB',
    buttonLabel: 'Browse Files',
    ...mockHandlers,
  },
  render: (args) => (
    <div className="bg-background p-6">
      <DragDropZone {...args} />
    </div>
  ),
};
