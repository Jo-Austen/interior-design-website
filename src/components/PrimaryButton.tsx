import { ButtonHTMLAttributes, ReactNode } from "react";

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
      className={`bg-accent text-neutral-900 px-6 py-3 rounded-md font-medium hover:bg-accent-hover transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
