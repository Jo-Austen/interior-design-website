import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`py-16 px-4 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  );
}