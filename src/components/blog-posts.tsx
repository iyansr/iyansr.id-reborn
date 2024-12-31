import { PostCard } from '@/components/post-card'
import { getBlogPosts } from '@/utils/blog'

export function BlogPosts() {
  const allBlogs = getBlogPosts()

  return (
    <div className="space-y-10">
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <PostCard {...post} key={post.slug} />
        ))}
    </div>
  )
}
