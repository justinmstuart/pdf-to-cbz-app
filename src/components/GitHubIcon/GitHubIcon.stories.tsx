import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import GitHubIcon from './GitHubIcon';

const meta: Meta<typeof GitHubIcon> = {
  title: 'Components/GitHubIcon',
  component: GitHubIcon,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof GitHubIcon>;

export const Default: Story = {
  render: () => (
    <div className="bg-background p-6 space-x-4 flex items-center">
      <GitHubIcon />
    </div>
  ),
};

export const CustomSize: Story = {
  render: () => (
    <div className="bg-background p-6 space-x-4 flex items-center">
      <GitHubIcon className="w-8 h-8" />
      <GitHubIcon className="w-12 h-12" />
      <GitHubIcon className="w-16 h-16" />
    </div>
  ),
};

export const CustomColor: Story = {
  render: () => (
    <div className="bg-background p-6 space-x-4 flex items-center">
      <GitHubIcon className="text-[#00F5FF]" />
      <GitHubIcon className="text-[#FF00A0]" />
      <GitHubIcon className="text-[#F5FF00]" />
    </div>
  ),
};
