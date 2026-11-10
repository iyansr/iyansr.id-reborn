import type { ReactNode } from 'react';

interface RowProps {
  id?: string;
  label: string;
  children: ReactNode;
  /** Keep the label pinned beside long content on md+. */
  stickyLabel?: boolean;
  /** Fade/rise the content on scroll. Off when children reveal themselves. */
  reveal?: boolean;
}

/** Two-column section: small mono label left, content right. */
export function Row({ id, label, children, stickyLabel, reveal = true }: RowProps) {
  return (
    <section
      id={id}
      className="mn-anchor grid grid-cols-1 gap-5 border-t border-(--mn-hair) py-14 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-10 md:py-16"
    >
      <h2 className={`mn-label ${stickyLabel ? 'md:sticky md:top-24 md:self-start' : ''}`}>{label}</h2>
      <div className={reveal ? 'mn-reveal' : undefined}>{children}</div>
    </section>
  );
}
