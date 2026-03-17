import { FC } from "react";

export enum HeaderType {
  H1 = "h1",
}

interface Props {
  type: HeaderType;
  children?: React.ReactNode;
}

const baseClassName = "text-center font-[Hasklig] text-foreground";

const HeaderClassNames: Record<HeaderType, string> = {
  [HeaderType.H1]: `text-[80px] font-bold`,
};

const HeaderText: FC<Props> = ({ type, children }) => {
  switch (type) {
    case HeaderType.H1:
      return (
        <h1 className={`${baseClassName} ${HeaderClassNames[HeaderType.H1]}`}>
          {children}
        </h1>
      );
    default:
      throw new Error(`Unsupported header type: ${type}`);
  }
};

export default HeaderText;
