import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export function Button ({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        flex items-center justify-center 
        bg-primary-100 font-semibold
        text-title-s text-light-80
        h-14 w-full rounded-lg p-2
        disabled:opacity-70
        ${props?.className || ''}
      `}
    >
      { children }
    </button>
  );
}