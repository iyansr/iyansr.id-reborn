import { NProgress } from '@components/NProgress';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactNode, Suspense } from 'react';
import { Footer, Header } from '../common';

export const Root = ({ children }: { children: ReactNode }) => {
  const { asPath } = useRouter();

  return (
    <>
      <Header />

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
    </>
  );
};
