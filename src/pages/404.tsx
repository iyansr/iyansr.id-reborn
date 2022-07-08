import Meta from '@components/Meta';
import { Section } from '@components/Section';
import type { NextPage } from 'next';
import Link from 'next/link';

const NotFound: NextPage = () => {
  return (
    <>
      <Meta title="Not Found" description="The page you're looking does not exist!" />

      <Section background="yellow" className="py-24">
        <div className="my-12">
          <div className="mx-auto flex h-40 flex-col justify-evenly space-y-2 text-center">
            <h1 className="text-3xl font-bold text-black md:text-4xl">Uh oh.. you're lost 😶</h1>
            <Link href="/" className="font-medium">
              Back to Home
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default NotFound;
