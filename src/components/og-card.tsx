import type { OgCard as OgCardProps } from '@/lib/og';
import { OG_HEIGHT, OG_WIDTH, SITE_NAME, SITE_URL } from '@/lib/og';

/**
 * The dark theme tokens from `src/styles.css` (`--color-*`) in plain values: satori
 * reads neither CSS variables nor the app stylesheet.
 */
const COLOR = {
  bg: '#0a0a0a',
  surface: '#111111',
  fg: '#f4f4f5',
  muted: '#8c8c94',
  accent: '#a3e635',
  line: 'rgba(255, 255, 255, 0.1)',
  lineStrong: 'rgba(255, 255, 255, 0.2)',
};

/** Satori's spelling of `line-clamp`: it only honours the `-webkit-box` form. */
function clamp(lines: number) {
  return {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: lines,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  } as const;
}

/**
 * The 1200×630 unfurl card, rendered by satori rather than the browser — so
 * flexbox only, every multi-child `div` needs `display: flex`, and the fonts
 * are the ones `/og` registers by name.
 */
export function OgCard({
  eyebrow,
  title,
  description,
  avatar,
}: OgCardProps & { avatar: string }) {
  return (
    <div
      style={{
        width: OG_WIDTH,
        height: OG_HEIGHT,
        display: 'flex',
        flexDirection: 'column',
        padding: 72,
        background: COLOR.bg,
        fontFamily: 'Geist',
      }}
    >
      {/* The hero's inline avatar beside the name and role. */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <img
          alt=""
          src={avatar}
          width={60}
          height={60}
          style={{
            borderRadius: 999,
            border: `2px solid ${COLOR.lineStrong}`,
            background: COLOR.surface,
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ fontSize: 28, fontWeight: 500, color: COLOR.fg }}>
            {SITE_NAME}
          </div>
          <div
            style={{
              fontFamily: 'Geist Mono',
              fontSize: 18,
              color: COLOR.muted,
            }}
          >
            Senior Software Engineer
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          marginTop: 'auto',
        }}
      >
        {/* The section label style, with the hero's status dot. */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            fontFamily: 'Geist Mono',
            fontSize: 20,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: COLOR.muted,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: COLOR.accent,
            }}
          />
          {eyebrow}
        </div>
        {/* The page title: `font-medium tracking-tight`. */}
        <div
          style={{
            ...clamp(2),
            fontSize: 68,
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: '-0.025em',
            color: COLOR.fg,
          }}
        >
          {title}
        </div>
        <div
          style={{
            ...clamp(2),
            maxWidth: 980,
            fontSize: 26,
            lineHeight: 1.45,
            color: COLOR.muted,
          }}
        >
          {description}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 40,
          paddingTop: 24,
          borderTop: `2px solid ${COLOR.line}`,
          fontFamily: 'Geist Mono',
          fontSize: 20,
          color: COLOR.muted,
        }}
      >
        <div>{new URL(SITE_URL).host}</div>
        <div style={{ color: COLOR.fg }}>iyansr</div>
      </div>
    </div>
  );
}
