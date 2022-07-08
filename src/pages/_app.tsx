import { Root } from '@components/Layout/containers/Root';
import '@styles/app.scss';
import '@styles/prism.scss';
import '@styles/tailwind.scss';
import type { AppProps } from 'next/app';
import 'nprogress/nprogress.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Root>
      <Component {...pageProps} />
    </Root>
  );
}

export default MyApp;
