import { BlogPosts } from '@/components/blog-posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="max-w-screen-sm mx-auto px-4 py-12 z-10 relative">
      <h1 className="font-semibold text-2xl tracking-tighter text-center mb-3">
        My Blog
      </h1>
      <p className="text-center text-neutral-300 mb-12">
        "If I tell you what happens, it won't happen"
      </p>
      <BlogPosts />
    </section>
  )
}
