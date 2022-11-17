import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  first?: boolean;
}

export const Section = ({ children, className = '', first = false }: SectionProps) => {
  return (
    <section
      className={`bg-bg-2 ${className} w-full overflow-hidden ${
        first ? 'h-screen min-h-[800px]' : 'min-h-[800px]'
      }`}
    >
      <div className="container mx-auto h-full max-w-6xl">{children}</div>
    </section>
  );
};
