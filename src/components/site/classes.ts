/**
 * Utility strings shared by several components. Kept as whole literals so the
 * Tailwind scanner sees every class.
 */

/** Section label, the page's heading convention. */
export const label =
  'font-mono text-[11px] font-normal leading-[1.4] tracking-[0.08em] uppercase text-muted';

/** Muted text link that brightens on hover. */
export const link = 'text-muted transition-colors duration-200 hover:text-fg';

/** Floating translucent surface shared by nav, hero, and footer controls. */
export const glass =
  'border border-line bg-bg/72 shadow-[0_6px_24px_-12px_rgb(0_0_0/0.35)] backdrop-blur-md';

/** Primary solid button. */
export const btn =
  'inline-flex h-8 items-center rounded-lg bg-btn-bg px-3 text-[13px] font-medium text-btn-fg [transition:opacity_0.2s,scale_160ms_var(--ease-out)] hover:opacity-85 motion-safe:active:scale-97';

/** Inline accent highlight for headline figures. */
export const figure = 'font-medium whitespace-nowrap text-accent-text';

/** Card root: pairs with `cardMedia`, `cardImage`, `cardTitle` below it. */
export const card = 'group/card';
export const cardMedia =
  'relative aspect-[16/10] overflow-hidden rounded-card border border-line bg-surface [transition:border-color_0.2s,scale_160ms_var(--ease-out)] group-hover/card:border-line-strong motion-safe:group-active/card:scale-98';
/** `data-og="true"` images (Open Graph fallbacks) are contained, not cropped. */
export const cardImage =
  'size-full object-cover object-top transition-[scale] duration-250 ease-out data-[og=true]:object-contain data-[og=true]:object-center motion-safe:pointer-fine:group-hover/card:scale-102';
export const cardTitle =
  'transition-colors duration-200 group-hover/card:text-accent-text';

/** Scroll reveal: CSS only, progressive (needs scroll-driven animations). */
export const reveal =
  'motion-safe:supports-[animation-timeline:view()]:[animation-name:enter] motion-safe:supports-[animation-timeline:view()]:[animation-timing-function:linear] motion-safe:supports-[animation-timeline:view()]:[animation-fill-mode:both] motion-safe:supports-[animation-timeline:view()]:[animation-timeline:view()] motion-safe:supports-[animation-timeline:view()]:[animation-range:entry_0%_entry_40%]';
