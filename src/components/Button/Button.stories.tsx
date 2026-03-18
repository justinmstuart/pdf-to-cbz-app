import type { Meta, StoryObj } from '@storybook/nextjs';
import Button, { Variant } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: [Variant.Primary],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { label: 'Button', variant: Variant.Primary },
  render: (args) => (
    <div className="bg-background p-6 space-x-4">
      <Button {...args} />
      <Button {...args} disabled />
    </div>
  ),
};
