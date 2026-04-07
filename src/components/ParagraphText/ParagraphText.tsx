import { FC } from 'react';

export enum ParagraphVariant {
  Default = 'default',
  Small = 'small',
  ExtraSmall = 'extraSmall',
  Large = 'large',
  Semibold = 'semibold',
  Muted = 'muted',
  Accent = 'accent',
  Primary = 'primary',
  Secondary = 'secondary',
}

interface Props {
  children?: React.ReactNode;
  variant?: ParagraphVariant;
}

const baseClassName = 'font-orbitron';

const variantClassNames: Record<ParagraphVariant, string> = {
  [ParagraphVariant.Default]:
    'text-[clamp(1.3rem,2.5vw,1.8rem)] text-muted max-w-[580px] leading-[1.6] tracking-[0.05em] [animation:fadeUp_0.8s_0.15s_ease_both] [&_span]:text-cyan',
  [ParagraphVariant.Small]: 'text-sm text-muted',
  [ParagraphVariant.ExtraSmall]: 'text-xs text-muted',
  [ParagraphVariant.Large]: 'text-xl font-semibold text-foreground',
  [ParagraphVariant.Semibold]: 'text-sm text-foreground font-semibold',
  [ParagraphVariant.Muted]: 'text-sm text-muted',
  [ParagraphVariant.Accent]: 'text-sm text-secondary animate-pulse',
  [ParagraphVariant.Primary]: 'text-primary',
  [ParagraphVariant.Secondary]: 'text-secondary',
};

const ParagraphText: FC<Props> = ({
  children,
  variant = ParagraphVariant.Default,
}) => (
  <p className={`${baseClassName} ${variantClassNames[variant]}`}>
    {children}
  </p>
);

export default ParagraphText;
