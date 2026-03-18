import { FC } from 'react';

interface Props {
  children?: React.ReactNode;
}

const className =
  'font-orbitron text-[clamp(1.3rem,2.5vw,1.8rem)] text-muted max-w-[580px] leading-[1.6] tracking-[0.05em] [animation:fadeUp_0.8s_0.15s_ease_both] [&_span]:text-cyan';

const ParagraphText: FC<Props> = ({ children }) => (
  <p className={className}>{children}</p>
);

export default ParagraphText;
