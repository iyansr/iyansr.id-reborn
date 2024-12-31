import type { BlogPost } from '@/types/blog'
import { getBlogPosts } from '@/utils/blog'

export const baseUrl = 'https://iyansr.id'

export default async function sitemap() {
  const blogs = getBlogPosts().map((post: BlogPost) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
