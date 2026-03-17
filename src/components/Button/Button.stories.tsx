import type { Meta, StoryObj } from '@storybook/nextjs';
import Button, { Variant } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: [Variant.Primary, Variant.Secondary],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryLight: Story = {
  args: { label: 'Button', variant: Variant.Primary },
  render: (args) => (
    <div className="bg-background p-6 space-x-4">
      <Button {...args} />
      <Button {...args} disabled />
    </div>
  ),
};

export const PrimaryDark: Story = {
  args: { label: 'Button', variant: Variant.Primary },
  render: (args) => (
    <div className="dark bg-background p-6 space-x-4">
      <Button {...args} />
      <Button {...args} disabled />
    </div>
  ),
};

export const SecondaryLight: Story = {
  args: { label: 'Button', variant: Variant.Secondary },
  render: (args) => (
    <div className="bg-background p-6 space-x-4">
      <Button {...args} />
      <Button {...args} disabled />
    </div>
  ),
};

export const SecondaryDark: Story = {
  args: { label: 'Button', variant: Variant.Secondary },
  render: (args) => (
    <div className="dark bg-background p-6 space-x-4">
      <Button {...args} />
      <Button {...args} disabled />
    </div>
  ),
};
