import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['primary', 'secondary'] },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { label: 'Button', variant: 'primary' },
};

export const Secondary: Story = {
  args: { label: 'Button', variant: 'secondary' },
};

export const Disabled: Story = {
  args: { label: 'Button', disabled: true },
};
