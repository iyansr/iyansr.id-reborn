export type BlogMetadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

export type BlogPost = {
  slug: string
  metadata: BlogMetadata
  content: string
}
