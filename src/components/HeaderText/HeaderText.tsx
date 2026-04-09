import { FC } from 'react';

export enum HeaderType {
  H1 = 'h1',
}

interface Props {
  type: HeaderType;
  children?: React.ReactNode;
}

const baseClassName = 'text-center font-press-start leading-[1.5] text-primary';

const headerClassNames: Record<HeaderType, string> = {
  [HeaderType.H1]: `text-[clamp(1.6rem,5vw,3.2rem)] font-bold`,
};

const HeaderText: FC<Props> = ({ type, children }) => {
  switch (type) {
    case HeaderType.H1:
      return (
        <h1 className={`${baseClassName} ${headerClassNames[HeaderType.H1]}`}>
          {children}
        </h1>
      );
    default:
      throw new Error(`Unsupported header type: ${type}`);
  }
};

export default HeaderText;
