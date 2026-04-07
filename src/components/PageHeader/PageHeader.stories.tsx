import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import PageHeader from './PageHeader';

const meta: Meta<typeof PageHeader> = {
  title: 'Components/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  args: {
    title: 'PDF → CBZ',
  },
  render: (args) => (
    <div className="bg-background p-6">
      <PageHeader {...args} />
    </div>
  ),
};

export const CustomTitle: Story = {
  args: {
    title: 'My App',
  },
  render: (args) => (
    <div className="bg-background p-6">
      <PageHeader {...args} />
    </div>
  ),
};
