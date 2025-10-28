import { createFileRoute, Link, useLoaderData } from '@tanstack/react-router';
import { ChevronRightIcon } from 'lucide-react';

import { ContributionCard } from '@/components/contribution-card';
import { ExperienceCard } from '@/components/experience-card';
import { BlurFade } from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { PostCard } from '@/components/post-card';
import { ProjectCard } from '@/components/project-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { EXPERIENCE } from '@/data/experience';
import { PROJECTS } from '@/data/project';
import { useOpenSourceContributions } from '@/hooks/opensource-contrib';
import { getAllPosts } from '@/lib/post';

export const Route = createFileRoute('/')({
  component: App,
  loader: async () => {
    const posts = await getAllPosts();
    return { posts };
  },
});

const BLUR_FADE_DELAY = 0.04;

function App() {
  const { posts } = useLoaderData({ from: '/' });

  const { data: contributions } = useOpenSourceContributions();

  return (
    <div className="flex flex-col space-y-10 pb-14">
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
                text="✦ Experienced Software Engineer focused on TypeScript and React, with a growing passion for AI and Blockchain technologies."
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
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="prose max-w-full text-pretty text-sm text-muted-foreground dark:prose-invert">
            Beginning my journey in 2020 as a Front-End Developer, I've grown
            into a Software Engineer who designs and builds complete, end-to-end
            applications. This background provides me with a valuable
            perspective, allowing me to develop systems with a capable back-end
            using Node.js and an intuitive, user-friendly front-end using React.
          </div>
        </BlurFade>
      </section>
      <section id="experience">
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="mb-4">
          <h2 className="text-xl font-bold">Work Experience</h2>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-4">
          {EXPERIENCE.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 5 + id * 0.05}
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
                location={work.location}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="work" className="mt-4">
        <BlurFade
          delay={BLUR_FADE_DELAY * 6 + EXPERIENCE.length * 0.05}
          className="mb-4"
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Work
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                My Projects and Contributions
              </h2>
              <p className="text-muted-foreground text-sm md:text-base/relaxed">
                I&apos;ve delivered impactful enterprise solutions and
                customer-facing applications that drive business value.
              </p>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 7 + EXPERIENCE.length * 0.05}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.title}
                dates={project.dates}
                description={project.description}
                tags={project.technologies}
                title={project.title}
                href={project.href}
                links={project.links}
                image={project.image}
                video={project.video}
                openSource={project.openSource}
              />
            ))}
          </div>
        </BlurFade>

        {/* <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <div className="flex justify-center mt-4">
            <Button size="sm" variant="link" className="text-muted-foreground">
              View More <ChevronRightIcon />
            </Button>
          </div>
        </BlurFade> */}
      </section>
      <section id="open-source" className="mt-4">
        <BlurFade
          delay={BLUR_FADE_DELAY * 9 + EXPERIENCE.length * 0.05}
          className="mb-4"
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Open Source
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                My Open Source Contribution
              </h2>
              <p className="text-muted-foreground text-sm md:text-base/relaxed">
                Check out my open source contribution on GitHub. This includes
                pull requests, issues, and other contributions.
              </p>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 10 + EXPERIENCE.length * 0.05}>
          <div className="grid grid-cols-1 gap-4">
            {contributions?.slice(0, 4)?.map((c) => (
              <ContributionCard
                key={c.id}
                contribution={{
                  created_at: c.created_at,
                  number: c.number,
                  title: c.title,
                  state: c.state,
                  html_url: c.html_url,
                  labels: c.labels,
                  id: c.id,
                  repository: c.repository,
                  repositoryUrl: c.repositoryUrl,
                  type: c.type as 'pr' | 'issue',
                  updated_at: c.updated_at,
                  user: {
                    avatar_url: c.user?.avatar_url ?? '',
                    html_url: c.user?.html_url ?? '',
                    login: c.user?.login ?? '',
                  },
                }}
              />
            ))}
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex justify-center mt-4">
            <Link to="/open-source">
              <Button
                size="sm"
                variant="link"
                className="text-muted-foreground"
              >
                View More <ChevronRightIcon />
              </Button>
            </Link>
          </div>
        </BlurFade>
      </section>
      <section id="posts" className="mt-4">
        <BlurFade
          delay={BLUR_FADE_DELAY * 12 + EXPERIENCE.length * 0.05}
          className="mb-4"
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Blog Posts
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Check out my latest blog posts
              </h2>
              <p className="text-muted-foreground text-sm md:text-base/relaxed">
                I&apos;ve written a variety of blog posts, from technical
                tutorials to personal stories.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 13 + EXPERIENCE.length * 0.05}>
          <div className="grid md:grid-cols-2 gap-4">
            {posts.map((post) => (
              <PostCard
                key={post.slug}
                title={post.metadata.title}
                href={`/blog/${post.slug}`}
                description={post.metadata.summary}
                dates={post.metadata.publishedAt}
                image={post.metadata.image}
              />
            ))}
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <div className="flex justify-center mt-4">
            <Link to="/blog">
              <Button
                size="sm"
                variant="link"
                className="text-muted-foreground"
              >
                View More <ChevronRightIcon />
              </Button>
            </Link>
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
