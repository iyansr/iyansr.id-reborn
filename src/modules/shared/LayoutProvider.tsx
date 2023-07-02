'use client';

import React, { Fragment, type PropsWithChildren } from 'react';

import { usePathname } from 'next/navigation';

import Header from './components/Header';

const LayoutProvider = ({ children }: PropsWithChildren) => {
  const pathName = usePathname();

  return (
    <Fragment>
      {pathName?.includes('/keystatic') ? null : <Header />}
      {children}
    </Fragment>
  );
};

export default LayoutProvider;
