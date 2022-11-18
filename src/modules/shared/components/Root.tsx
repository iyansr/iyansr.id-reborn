import { ReactNode, Suspense } from 'react';
import { Work_Sans } from '@next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

import Footer from './Footer';
import Navbar from './Navbar';
import { NProgress } from './NProgress';

// @ts-ignore
const ws = Work_Sans({
  variable: '--work-sans',
});

export const Root = ({ children }: { children: ReactNode }) => {
  const { asPath } = useRouter();

  return (
    <main className={ws.className}>
      <Navbar />

      <AnimatePresence exitBeforeEnter initial={true}>
        <motion.main
          key={asPath}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full"
        >
          <Suspense fallback={null}>{children}</Suspense>
        </motion.main>
      </AnimatePresence>

      <Footer />

      <NProgress />
    </main>
  );
};
