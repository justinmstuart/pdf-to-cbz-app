import { FC } from 'react';

interface Props {
  children?: React.ReactNode;
}

const className = 'font-[Hasklig] font-regular text-foreground';

const ParagraphText: FC<Props> = ({ children }) => (
  <p className={className}>{children}</p>
);

export default ParagraphText;
