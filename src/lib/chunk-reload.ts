/** Reload the page when a lazy-loaded chunk fails (stale cache after deploy). */
export function registerChunkReloadHandler() {
  if (typeof window === 'undefined') return;

  window.addEventListener('vite:preloadError', () => {
    window.location.reload();
  });

  window.addEventListener('unhandledrejection', (event) => {
    const message =
      event.reason instanceof Error
        ? event.reason.message
        : String(event.reason ?? '');

    if (message.includes('Failed to fetch dynamically imported module')) {
      event.preventDefault();
      window.location.reload();
    }
  });
}

registerChunkReloadHandler();
