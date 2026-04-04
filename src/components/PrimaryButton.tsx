import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export function PrimaryButton({
  children,
  onClick,
  type = "button",
  className = ""
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-accent text-neutral-900 px-6 py-3 rounded-md font-medium hover:bg-accent-hover transition-colors ${className}`}
    >
      {children}
    </button>
  );
}