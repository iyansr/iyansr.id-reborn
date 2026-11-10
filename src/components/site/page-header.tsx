import type { ReactNode } from 'react';

interface PageHeaderProps {
  label: string;
  title: string;
  children?: ReactNode;
}

/** Top of an inner page: mono label, title, optional muted lead. Mirrors the home hero scale. */
export function PageHeader({ label, title, children }: PageHeaderProps) {
  return (
    <header className="pt-20 pb-12 md:pt-24 md:pb-14">
      <p className="mn-label">{label}</p>
      <h1 className="mt-4 text-[1.625rem] leading-[1.2] font-medium tracking-tight text-balance md:text-[1.875rem]">
        {title}
      </h1>
      {children && (
        <p className="mt-3 max-w-lg text-[14px] text-(--mn-muted)">{children}</p>
      )}
    </header>
  );
}
