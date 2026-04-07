import { FC } from 'react';
import GitHubIcon from '../GitHubIcon/GitHubIcon';

export interface PageFooterProps {
  githubHref: string;
  linkLabel?: string;
}

const PageFooter: FC<PageFooterProps> = ({
  githubHref,
  linkLabel = 'View on GitHub',
}) => {
  return (
    <footer className="mt-12 pt-6 text-center border-t border-primary/20">
      <a
        href={githubHref}
        className="inline-flex items-center gap-2 text-secondary underline underline-offset-2 hover:text-secondary/80 transition-all"
      >
        <span>{linkLabel}</span>
        <GitHubIcon />
      </a>
    </footer>
  );
};

export default PageFooter;
