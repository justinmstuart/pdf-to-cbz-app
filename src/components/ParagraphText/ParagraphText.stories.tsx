import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ParagraphText from './ParagraphText';

const meta: Meta<typeof ParagraphText> = {
  title: 'Components/ParagraphText',
  component: ParagraphText,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
  },
};

export default meta;
type Story = StoryObj<typeof ParagraphText>;

export const Paragraph: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: (args) => (
    <div className="bg-background p-6">
      <ParagraphText {...args} />
    </div>
  ),
};
