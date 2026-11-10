import { Row } from '@/components/site/row';

const FIGURES = [
  { figure: '140M+', label: 'Monthly readers, Forbes Predict widget' },
  { figure: '40,000+', label: 'Users, Yapp, built from zero' },
  { figure: '1 million', label: 'Users, Pintu, mobile and web' },
] as const;

export function Impact() {
  return (
    <Row label="Impact">
      <dl className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-3 min-[480px]:gap-4">
        {FIGURES.map((item) => (
          <div key={item.figure} className="flex flex-col gap-1.5">
            <dt className="text-[12.5px] leading-snug text-(--mn-muted)">{item.label}</dt>
            <dd className="mn-mono order-first text-[1.125rem] font-medium tracking-tight text-(--mn-fg)">
              {item.figure}
            </dd>
          </div>
        ))}
      </dl>
    </Row>
  );
}
