import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import PageFooter from './PageFooter';

const meta: Meta<typeof PageFooter> = {
  title: 'Components/PageFooter',
  component: PageFooter,
  tags: ['autodocs'],
  argTypes: {
    githubHref: { control: 'text' },
    linkLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof PageFooter>;

export const Default: Story = {
  args: {
    githubHref: 'https://github.com/your-repo',
  },
  render: (args) => (
    <div className="bg-background p-6">
      <PageFooter {...args} />
    </div>
  ),
};

export const CustomLabel: Story = {
  args: {
    githubHref: 'https://github.com/your-repo',
    linkLabel: 'GitHub',
  },
  render: (args) => (
    <div className="bg-background p-6">
      <PageFooter {...args} />
    </div>
  ),
};
