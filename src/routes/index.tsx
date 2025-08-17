import { createFileRoute } from '@tanstack/react-router';

import { ExperienceCard } from '@/components/experience-card';
import { BlurFade } from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { EXPERIENCE } from '@/data/experience';

export const Route = createFileRoute('/')({
  component: App,
});

const BLUR_FADE_DELAY = 0.04;

function App() {
  return (
    <div className="flex flex-col space-y-10">
      <section id="hero">
        <div className="mx-auto w-full space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent"
                yOffset={8}
                text={`Hi, I'm Iyan`}
              />
              <BlurFadeText
                className="text-sm font-medium"
                delay={BLUR_FADE_DELAY}
                text="(I Putu Saputrayana)"
              />
              <BlurFadeText
                className="max-w-[580px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text="Experienced Software Engineer focused on TypeScript and React, with a growing passion for AI and Blockchain technologies."
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage
                  alt="Iyan Saputra"
                  src="https://avatars.githubusercontent.com/u/42711013?v=4"
                />
                <AvatarFallback>I</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty text-sm text-muted-foreground dark:prose-invert">
            Beginning my journey in 2020 as a Front-End Developer, I've grown
            into a Software Engineer who designs and builds complete, end-to-end
            applications. This background provides me with a valuable
            perspective, allowing me to develop systems with a capable back-end
            using Node.js and an intuitive, user-friendly front-end using React.
          </div>
        </BlurFade>
      </section>
      <section id="work">
        <BlurFade delay={BLUR_FADE_DELAY * 5} className="mb-4">
          <h2 className="text-xl font-bold">Work Experience</h2>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-6">
          {EXPERIENCE.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ExperienceCard
                key={work.company}
                logoUrl={work.logo ?? ''}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.companyUrl}
                badges={work.technologies}
                period={work.dates}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </div>
  );
}
