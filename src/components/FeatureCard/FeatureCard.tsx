import { FC } from 'react';
import ParagraphText, { ParagraphVariant } from '../ParagraphText/ParagraphText';

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  borderColor: 'primary' | 'secondary' | 'accent';
}

const borderColorMap = {
  primary: 'border-primary/20 hover:border-primary/40',
  secondary: 'border-secondary/20 hover:border-secondary/40',
  accent: 'border-brand-accent/20 hover:border-brand-accent/40',
};

const FeatureCard: FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  borderColor,
}) => {
  return (
    <div
      className={`bg-background/60 border rounded-lg p-4 text-center transition-colors ${borderColorMap[borderColor]}`}
    >
      <div className="text-2xl mb-2">{icon}</div>
      <ParagraphText variant={ParagraphVariant.Semibold}>
        {title}
      </ParagraphText>
      <ParagraphText variant={ParagraphVariant.ExtraSmall}>
        {description}
      </ParagraphText>
    </div>
  );
};

export default FeatureCard;
