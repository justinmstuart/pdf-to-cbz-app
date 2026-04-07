import { FC } from 'react';
import HeaderText, { HeaderType } from '../HeaderText/HeaderText';

export interface PageHeaderProps {
  title: string;
}

const PageHeader: FC<PageHeaderProps> = ({ title }) => {
  return (
    <header className="mb-12 text-center">
      <div className="inline-block">
        <HeaderText type={HeaderType.H1}>{title}</HeaderText>
        <div className="h-1 bg-gradient-to-r from-primary via-secondary to-brand-accent rounded-full mt-3 shadow-[0_0_20px_var(--color-primary-glow)]" />
      </div>
    </header>
  );
};

export default PageHeader;
