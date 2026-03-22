import type { Meta, StoryObj } from '@storybook/nextjs';
import Spinner from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const SpinnerStory: Story = {
  render: () => (
    <div className="bg-background p-6 space-x-4">
      <Spinner />
    </div>
  ),
};
