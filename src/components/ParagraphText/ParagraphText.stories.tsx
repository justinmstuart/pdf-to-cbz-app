import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ParagraphText, { ParagraphVariant } from './ParagraphText';

const meta: Meta<typeof ParagraphText> = {
  title: 'Components/ParagraphText',
  component: ParagraphText,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: 'radio',
      options: Object.values(ParagraphVariant),
    },
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.',
  },
};

export default meta;
type Story = StoryObj<typeof ParagraphText>;

export const Default: Story = {
  args: {
    variant: ParagraphVariant.Default,
  },
  render: (args) => (
    <div className="bg-background p-6">
      <ParagraphText {...args} />
    </div>
  ),
};

export const Small: Story = {
  args: {
    variant: ParagraphVariant.Small,
    children: 'This is small text',
  },
  render: (args) => (
    <div className="bg-background p-6">
      <ParagraphText {...args} />
    </div>
  ),
};

export const Large: Story = {
  args: {
    variant: ParagraphVariant.Large,
    children: 'This is large text',
  },
  render: (args) => (
    <div className="bg-background p-6">
      <ParagraphText {...args} />
    </div>
  ),
};

export const Semibold: Story = {
  args: {
    variant: ParagraphVariant.Semibold,
    children: 'This is semibold text',
  },
  render: (args) => (
    <div className="bg-background p-6">
      <ParagraphText {...args} />
    </div>
  ),
};

export const Muted: Story = {
  args: {
    variant: ParagraphVariant.Muted,
    children: 'This is muted text',
  },
  render: (args) => (
    <div className="bg-background p-6">
      <ParagraphText {...args} />
    </div>
  ),
};

export const Accent: Story = {
  args: {
    variant: ParagraphVariant.Accent,
    children: 'This is accent text with animation',
  },
  render: (args) => (
    <div className="bg-background p-6">
      <ParagraphText {...args} />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="bg-background p-6 space-y-4">
      <ParagraphText variant={ParagraphVariant.Default}>
        Default variant text
      </ParagraphText>
      <ParagraphText variant={ParagraphVariant.Large}>
        Large variant text
      </ParagraphText>
      <ParagraphText variant={ParagraphVariant.Semibold}>
        Semibold variant text
      </ParagraphText>
      <ParagraphText variant={ParagraphVariant.Small}>
        Small variant text
      </ParagraphText>
      <ParagraphText variant={ParagraphVariant.Muted}>
        Muted variant text
      </ParagraphText>
      <ParagraphText variant={ParagraphVariant.Accent}>
        Accent variant text
      </ParagraphText>
    </div>
  ),
};
