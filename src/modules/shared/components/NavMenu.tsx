'use client';

import React from 'react';
import { motion } from 'framer-motion';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import cn from '@app/modules/utils/cn';

const menu = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/work',
    label: 'Portfolio',
  },
  {
    href: '/now',
    label: 'Now',
  },
  {
    href: '/snippets',
    label: 'Snippets',
  },
];

const NavMenu = () => {
  const pathName = usePathname();
  const isActive = (href: string) => pathName === href;

  return (
    <nav className="mx-auto max-w-xl px-4">
      <ul className="flex justify-between space-x-0 rounded-full border border-neutral-800 bg-black/70 p-1 backdrop-blur-md lg:space-x-2">
        {menu.map((item, index) => (
          <li key={String(index)}>
            <Link href={item.href}>
              <button className="relative rounded-full px-2 py-2 text-sm font-medium text-neutral-500 transition duration-150 hover:text-neutral-400 lg:px-6 lg:py-2 lg:text-base">
                <span className={cn('relative z-10', { 'text-neutral-50': isActive(item.href) })}>
                  {item.label}
                </span>
                {isActive(item.href) && (
                  <motion.span
                    layoutId="bubble"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    className="absolute inset-0 rounded-full bg-neutral-800"
                  />
                )}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
