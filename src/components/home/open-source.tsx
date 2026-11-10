import { Link } from '@tanstack/react-router';

import { PrRow } from '@/components/site/pr-row';
import { Row } from '@/components/site/row';
import { NOTABLE_CONTRIBUTIONS } from '@/data/contributions';

export function OpenSource() {
  return (
    <Row id="open-source" label="Open source">
      <ul className="flex flex-col gap-6">
        {NOTABLE_CONTRIBUTIONS.map((pr) => (
          <li key={pr.url}>
            <PrRow
              url={pr.url}
              repo={pr.repo}
              number={pr.number}
              title={pr.title}
              status={pr.status}
              detail={pr.summary}
            />
          </li>
        ))}
      </ul>

      <Link to="/open-source" className="mn-link mt-8 inline-block text-[13px]">
        All contributions
      </Link>
    </Row>
  );
}
