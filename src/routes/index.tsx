import { createFileRoute, Link } from '@tanstack/react-router';

import { listPosts } from '../lib/posts';

export const Route = createFileRoute('/')({
  component: RouteComponent,
  loader: async () => {
    const posts = await listPosts();

    return { posts };
  },
});

function RouteComponent() {
  const { posts } = Route.useLoaderData();
  console.log(posts);
  return (
    <main className="min-h-screen bg-base-100">
      <section className="hero min-h-screen relative">
        <div className="hero-content text-center flex flex-col h-full ">
          <div className="max-w-xl flex-1 flex flex-col items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Iyan Saputra
            </h1>
            <h2 className="text-sm text-neutral/50 mb-4">
              (I Putu Saputrayana)
            </h2>
            <p className="text-xl md:text-2xl text-neutral/80 mb-8 font-semibold">
              Software Engineer
            </p>
            <div className="flex gap-2 justify-center mt-6">
              <a href="#about">
                <button className="btn btn-primary">About Me</button>
              </a>

              <button className="btn btn-link">View My Works</button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 flex gap-4">
          <a href="https://github.com" target="_blank" aria-label="GitHub">
            <button className="btn btn-ghost btn-circle">
              <svg
                className="w-5 h-5"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </button>
          </a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <button className="btn btn-ghost btn-circle">
              <svg
                className="w-5 h-5"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </button>
          </a>
          <a href="mailto:contact@example.com" aria-label="Email">
            <button className="btn btn-ghost btn-circle">
              <svg
                className="w-5 h-5"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <title>Gmail</title>
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            </button>
          </a>
        </div>
      </section>

      <section id="about" className="py-20 px-4 md:px-6 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="/placeholder.svg?height=192&width=192"
                  alt="Profile"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg mb-4">
                Hello! I'm a passionate Software Engineer with expertise in
                building modern web applications. I specialize in frontend
                development with React and Next.js, and have experience with
                backend technologies.
              </p>
              <p className="text-lg mb-6">
                When I'm not coding, you can find me hiking, reading, or
                exploring local coffee shops. I'm always eager to learn new
                technologies and solve challenging problems.
              </p>
              <div className="flex flex-wrap gap-2"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="experiences" className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Experiences
          </h2>

          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">1984</time>
                <div className="text-lg font-black">
                  First Macintosh computer
                </div>
                The Apple Macintosh—later rebranded as the Macintosh 128K—is the
                original Apple Macintosh personal computer. It played a pivotal
                role in establishing desktop publishing as a general office
                function. The motherboard, a 9 in (23 cm) CRT monitor, and a
                floppy drive were housed in a beige case with integrated
                carrying handle; it came with a keyboard and single-button
                mouse.
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </section>

      <section id="works" className="py-20 px-4 md:px-6 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <Link
              to="/blog/$slug"
              params={{ slug: 'create-simple-eth-wallet' }}>
              Project 1
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
