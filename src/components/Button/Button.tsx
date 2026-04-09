import { ButtonHTMLAttributes, FC } from 'react';

export enum Variant {
  Primary = 'primary',
}

const base =
  'font-press-start text-xs cursor-pointer inline-flex items-center justify-center border-none py-[1.1rem] px-[2.4rem] tracking-[0.08em] [transition:transform_0.1s,box-shadow_0.2s] [clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%_-_10px))] focus:outline-none disabled:opacity-50';
const variants: Record<Variant, string> = {
  [Variant.Primary]:
    'text-background bg-primary [box-shadow:4px_4px_0_var(--color-brand-accent),0_0_20px_var(--color-primary),0_0_50px_var(--color-primary-glow)] hover:[transform:translate(-2px,-2px)] hover:[box-shadow:6px_6px_0_var(--color-brand-accent),0_0_30px_var(--color-primary),0_0_70px_var(--color-primary-glow-strong)] hover:bg-primary-hover active:[transform:translate(2px,2px)] active:[box-shadow:2px_2px_0_var(--color-brand-accent),0_0_10px_var(--color-primary)]',
};
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  variant = Variant.Primary,
  label,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`${base} ${variants[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
