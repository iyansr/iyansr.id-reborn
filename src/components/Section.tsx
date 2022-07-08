import { ReactNode } from 'react';

type backgroundColors = 'yellow' | 'purple' | 'gray' | 'teal';

const bgColors = {
  yellow: 'bg-yellow-200',
  purple: 'bg-purple-200',
  gray: 'bg-yellow-200',
  teal: 'bg-teal-custom',
};

interface SectionProps {
  children: ReactNode;
  background: backgroundColors;
  className?: string;
  first?: boolean;
}

export const Section = ({ children, background, className = '', first = false }: SectionProps) => {
  return (
    <section
      className={`${bgColors[background]} ${className} w-full overflow-hidden ${
        first ? 'h-screen min-h-[800px]' : 'min-h-[800px]'
      }`}
    >
      <div className="container mx-auto h-full max-w-screen-xl">{children}</div>
    </section>
  );
};
