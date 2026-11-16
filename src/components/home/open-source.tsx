import { Link } from '@tanstack/react-router';

import { link } from '@/components/site/classes';
import { PrList } from '@/components/site/pr-list';
import { Row } from '@/components/site/row';

export function OpenSource() {
  return (
    <Row id="open-source" label="Open source">
      <PrList limit={8} hideClosed />

      <Link
        to="/open-source"
        className={`${link} mt-8 inline-block text-[13px]`}
      >
        All contributions
      </Link>
    </Row>
  );
}
