import { ButtonHTMLAttributes, ReactNode } from "react";
import { secondaryButtonClassName } from "./buttonStyles";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function SecondaryButton({
  children,
  type = "button",
  className = "",
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className={secondaryButtonClassName(`px-6 py-3 text-base ${className}`)}
    >
      {children}
    </button>
  );
}
