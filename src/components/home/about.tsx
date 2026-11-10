import { Row } from '@/components/site/row';

export function About() {
  return (
    <Row id="about" label="About">
      <div className="flex max-w-prose flex-col gap-4 text-[14px] leading-relaxed text-(--mn-fg-soft)">
        <p>
          I started in 2020 as a front-end developer and have grown into a software engineer who
          designs and builds complete, end-to-end applications. That background lets me build
          systems with a capable Node.js back end and an intuitive, user-friendly React front end.
        </p>
        <p>
          I work remotely from Indonesia with a focus on TypeScript and React, from early startups
          to a crypto exchange and Forbes. I care about fast interfaces, clear code, and shipping
          things people actually use.
        </p>
      </div>
    </Row>
  );
}
