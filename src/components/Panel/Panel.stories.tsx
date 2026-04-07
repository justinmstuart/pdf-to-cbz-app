import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Panel, { PanelVariant } from './Panel';
import ParagraphText from '../ParagraphText/ParagraphText';
import FeatureCard from '../FeatureCard/FeatureCard';

const meta: Meta<typeof Panel> = {
  title: 'Components/Panel',
  component: Panel,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: Object.values(PanelVariant),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const Card: Story = {
  render: () => (
    <div className="bg-background p-6">
      <Panel variant={PanelVariant.Card}>
        <ParagraphText>
          Convert a PDF into a CBZ archive — a comic book-friendly format that
          works with e-readers. Found a bug or have an idea? Pull requests and
          issues are always welcome.
        </ParagraphText>
      </Panel>
    </div>
  ),
};

export const Grid: Story = {
  render: () => (
    <div className="bg-background p-6">
      <Panel variant={PanelVariant.Grid}>
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
      </Panel>
    </div>
  ),
};
