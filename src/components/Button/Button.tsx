import { ButtonHTMLAttributes, FC } from 'react';

export enum Variant {
  Primary = 'primary',
  Secondary = 'secondary',
}

const base =
  'font-press-start font-medium inline-flex items-center justify-center rounded-md px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50';
const variants: Record<Variant, string> = {
  [Variant.Primary]:
    'bg-primary text-foreground hover:bg-foreground/25 focus:ring-primary',
  [Variant.Secondary]:
    'border border-secondary bg-transparent text-secondary hover:bg-foreground/25 focus:ring-secondary',
};
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  label: string;
}

const Button: FC<ButtonProps> = ({
  variant = Variant.Primary,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {label}
    </button>
  );
};

export default Button;
