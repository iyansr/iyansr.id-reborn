import { useEffect, useState } from 'react';

import type { BlogPost } from '../lib/post';
import { getAllPosts, getPostsMetadata } from '../lib/post';

export interface UsePostsOptions {
  showContent?: boolean;
}

export interface UsePostsReturn {
  posts: Omit<BlogPost, 'content'>[];
  loading: boolean;
  error: string | null;
}

export const usePosts = ({
  showContent = false,
}: UsePostsOptions = {}): UsePostsReturn => {
  const [posts, setPosts] = useState<Omit<BlogPost, 'content'>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        const fetchedPosts = showContent ? await getAllPosts() : [];

        if (!showContent) {
          // If we only need metadata, use getPostsMetadata for better performance
          const metadata = await getPostsMetadata();
          const postsWithEmptyContent = metadata.map((meta) => ({
            slug: meta.slug,
            metadata: {
              title: meta.title,
              publishedAt: meta.publishedAt,
              summary: meta.summary,
              image: meta.image,
            },
            content: '',
          }));
          setPosts(postsWithEmptyContent);
        } else {
          setPosts(fetchedPosts);
        }
      } catch (err) {
        setError('Failed to load blog posts');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [showContent]);

  return { posts, loading, error };
};

export default usePosts;
