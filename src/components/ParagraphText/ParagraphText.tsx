import { FC } from 'react';

interface Props {
  children?: React.ReactNode;
}

const className = 'font-orbitron text-foreground';

const ParagraphText: FC<Props> = ({ children }) => (
  <p className={className}>{children}</p>
);

export default ParagraphText;
