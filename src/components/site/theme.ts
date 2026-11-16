export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';
/** Browser UI colour per theme; matches --color-bg. */
const THEME_COLOR = { light: '#f7f7f4', dark: '#0a0a0a' } as const;

/**
 * Inlined in <head> so the theme is set before first paint. Applies the saved
 * choice, else the system one, and follows system changes until the user picks.
 */
export const THEME_BOOT_SCRIPT = `(() => {
  const root = document.documentElement;
  const media = matchMedia('(prefers-color-scheme: light)');
  // theme-color lives outside React's head tags so hydration never resets it.
  const meta = document.createElement('meta');
  meta.name = 'theme-color';
  document.head.append(meta);
  const saved = () => { try { return localStorage.getItem('${STORAGE_KEY}'); } catch { return null; } };
  const apply = () => {
    const theme = saved();
    root.dataset.theme = theme === 'light' || theme === 'dark' ? theme : media.matches ? 'light' : 'dark';
    meta.content = ${JSON.stringify(THEME_COLOR)}[root.dataset.theme];
  };
  apply();
  media.addEventListener('change', apply);
})();`;

export function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

export function toggleTheme() {
  const next: Theme = currentTheme() === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = next;
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (meta) meta.content = THEME_COLOR[next];
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Private mode or storage disabled: the choice lasts for this page only.
  }
}
