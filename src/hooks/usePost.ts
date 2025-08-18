import { useEffect, useState } from 'react';

import type { BlogPost } from '../lib/post';
import { getPostBySlug } from '../lib/post';

export interface UsePostReturn {
  post: BlogPost | null;
  loading: boolean;
  error: string | null;
}

export const usePost = (slug: string): UsePostReturn => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);

        const fetchedPost = await getPostBySlug(slug);

        if (!fetchedPost) {
          setError('Post not found');
        } else {
          setPost(fetchedPost);
        }
      } catch (err) {
        setError('Failed to load blog post');
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  return { post, loading, error };
};

export default usePost;
