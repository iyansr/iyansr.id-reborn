'use client';

import React, { Fragment } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import NavMenu from './NavMenu';

const Header = () => {
  return (
    <Fragment>
      <div className="flex items-start">
        <Link href="/">
          <div className="flex items-center space-x-2 pt-1">
            <Image
              src={require('@app/app/assets/iyansr.png')}
              width={42}
              height={42}
              placeholder="blur"
              alt="Iyan"
            />
            <h3 className="mt-2 text-lg font-semibold">IyanSR.</h3>
          </div>
        </Link>
      </div>
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 lg:bottom-auto lg:top-7">
        <NavMenu />
      </div>
    </Fragment>
  );
};

export default Header;
