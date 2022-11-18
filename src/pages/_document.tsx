import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="id, en">
      <Head>
        {/* preconnect to analytics domin */}
        <link rel="preconnect" href="https://cdn.splitbee.io" />

        {/* Meta Data */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="application-name" content="IyanSR" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="IyanSR" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#ffeed9" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#B9FBDF" />
        <link rel="apple-touch-icon" href="/icon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {process.env.NODE_ENV === 'production' && (
          <Script
            id="splitbee-analytics"
            strategy="lazyOnload"
            async
            defer
            src="https://cdn.splitbee.io/sb.js"
          />
        )}
      </Head>

      <body className="bg-bg-2 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
