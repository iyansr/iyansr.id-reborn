import Link from 'next/link';
import { useRouter } from 'next/router';

import siteConfig from '@modules/shared/config/siteConfig';

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="mx-auto max-w-6xl py-8 px-4">
      <ul className="flex flex-wrap items-center justify-center space-x-8 font-semibold text-earth-1 md:justify-start">
        {siteConfig.links.map((m, i) => (
          <li
            key={i}
            className={m.matches(router.pathname) ? 'border-b-2 border-b-earth-1/40' : ''}
          >
            <Link href={m.href}>{m.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
