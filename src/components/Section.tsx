import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-16 px-4 scroll-mt-24 ${className}`}>
      <div className="w-full max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}