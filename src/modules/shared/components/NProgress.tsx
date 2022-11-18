import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { default as progress } from 'nprogress';

export const NProgress = () => {
  const { events } = useRouter();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const start = () => {
      timeout = setTimeout(progress.start, 100);
    };

    const done = () => {
      clearTimeout(timeout);
      progress.done();
    };

    events.on('routeChangeStart', start);
    events.on('routeChangeComplete', done);
    events.on('routeChangeError', done);
    return () => {
      events.off('routeChangeStart', start);
      events.off('routeChangeComplete', done);
      events.off('routeChangeError', done);
    };
  }, [events]);
  return <></>;
};
