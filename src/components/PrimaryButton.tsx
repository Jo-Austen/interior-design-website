import { ButtonHTMLAttributes, ReactNode } from "react";
import { primaryButtonClassName } from "./buttonStyles";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function PrimaryButton({
  children,
  type = "button",
  className = "",
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className={primaryButtonClassName(`px-6 py-3 text-base ${className}`)}
    >
      {children}
    </button>
  );
}
