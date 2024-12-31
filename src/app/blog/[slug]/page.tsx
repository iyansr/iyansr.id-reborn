import { notFound } from 'next/navigation'

import { baseUrl } from '@/app/sitemap'
import { CustomMDX } from '@/components/mdx'
import { formatDate, getBlogPosts } from '@/utils/blog'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return {}
  }

  const { title, publishedAt: publishedTime, summary: description, image } = post.metadata
  const ogImage = image
    ? image.startsWith('http')
      ? image
      : `${baseUrl}${image}`
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug

  const post = getBlogPosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="relative z-10 max-w-screen-md mx-auto bg-neutral-950/10 rounded-xl border border-neutral-900 backdrop-blur-sm px-6 pt-6 md:pt-12 pb-12 md:px-12 md:pb-20 md:my-6 ">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? post.metadata.image.startsWith('http')
                ? post.metadata.image
                : `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Iyan Saputra',
            },
          }),
        }}
      />

      <Link href="/blog">
        <div className="size-8 rounded-full border text-neutral-400 border-neutral-800 flex items-center justify-center">
          <ArrowLeft className="size-3" />
        </div>
      </Link>

      {post.metadata.image && (
        <div className="w-full aspect-video relative rounded-md overflow-hidden my-6">
          <Image
            src={post.metadata.image}
            alt={post.metadata.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <h1 className="title font-semibold text-3xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose prose-invert text-neutral-400">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
