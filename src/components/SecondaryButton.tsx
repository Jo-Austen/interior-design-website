import { ButtonHTMLAttributes, ReactNode } from "react";

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
      className={`border border-neutral-300 text-neutral-700 px-6 py-3 rounded-md font-medium hover:bg-neutral-50 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
