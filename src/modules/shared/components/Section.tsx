import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export const Section = ({ children, className = '' }: SectionProps) => {
  return (
    <section className={`bg-bg-2 ${className} w-full overflow-hidden`}>
      <div className="container mx-auto h-full max-w-6xl">{children}</div>
    </section>
  );
};
