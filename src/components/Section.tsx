import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`py-16 px-4 ${className}`}>
      <div className="w-full max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}