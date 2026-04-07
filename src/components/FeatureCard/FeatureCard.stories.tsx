import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import FeatureCard from './FeatureCard';

const meta: Meta<typeof FeatureCard> = {
  title: 'Components/FeatureCard',
  component: FeatureCard,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    borderColor: {
      control: 'radio',
      options: ['primary', 'secondary', 'accent'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FeatureCard>;

export const Primary: Story = {
  args: {
    icon: '⚡',
    title: 'Fast',
    description: 'Local processing',
    borderColor: 'primary',
  },
  render: (args) => (
    <div className="bg-background p-6">
      <FeatureCard {...args} />
    </div>
  ),
};

export const Secondary: Story = {
  args: {
    icon: '🔒',
    title: 'Private',
    description: 'No uploads',
    borderColor: 'secondary',
  },
  render: (args) => (
    <div className="bg-background p-6">
      <FeatureCard {...args} />
    </div>
  ),
};

export const Accent: Story = {
  args: {
    icon: '📖',
    title: 'Compatible',
    description: 'Works everywhere',
    borderColor: 'accent',
  },
  render: (args) => (
    <div className="bg-background p-6">
      <FeatureCard {...args} />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="bg-background p-6 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl">
      <FeatureCard
        icon="⚡"
        title="Fast"
        description="Local processing"
        borderColor="primary"
      />
      <FeatureCard
        icon="🔒"
        title="Private"
        description="No uploads"
        borderColor="secondary"
      />
      <FeatureCard
        icon="📖"
        title="Compatible"
        description="Works everywhere"
        borderColor="accent"
      />
    </div>
  ),
};
