import { FC, ReactNode } from 'react';

export enum PanelVariant {
  Card = 'card',
  Grid = 'grid',
}

export interface PanelProps {
  variant: PanelVariant;
  children: ReactNode;
}

const variantClassNames: Record<PanelVariant, string> = {
  [PanelVariant.Card]:
    'bg-background border-2 border-primary/30 rounded-lg p-6 shadow-[0_0_30px_var(--color-primary-glow)] hover:shadow-[0_0_40px_var(--color-primary-glow)] transition-all duration-300',
  [PanelVariant.Grid]: 'grid grid-cols-1 md:grid-cols-3 gap-4 mt-4',
};

const Panel: FC<PanelProps> = ({ variant, children }) => {
  return (
    <div className={`w-full max-w-2xl ${variantClassNames[variant]}`}>
      {children}
    </div>
  );
};

export default Panel;
