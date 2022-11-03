import { Work_Sans } from '@next/font/google';
import type { AppProps } from 'next/app';

import '@modules/shared/styles/app.scss';
import '@modules/shared/styles/prism.scss';
import '@modules/shared/styles/tailwind.scss';
import 'nprogress/nprogress.css';

// @ts-ignore
const ws = Work_Sans({
  variable: '--work-sans',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={ws.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
