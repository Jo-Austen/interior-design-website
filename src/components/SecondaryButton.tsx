import { ReactNode } from "react";

interface SecondaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export function SecondaryButton({
  children,
  onClick,
  type = "button",
  className = ""
}: SecondaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`border border-neutral-300 text-neutral-700 px-6 py-3 rounded-md font-medium hover:bg-neutral-50 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}