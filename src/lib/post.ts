import rehypePrettyCode from 'rehype-pretty-code';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export type BlogMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

export type BlogPost = {
  slug: string;
  metadata: BlogMetadata;
  content: string;
};

// Simple frontmatter parser
function parseFrontmatter(content: string): { metadata: any; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { metadata: {}, content };
  }

  const [, frontmatterStr, bodyContent] = match;
  const metadata: any = {};

  // Parse YAML-like frontmatter
  frontmatterStr.split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line
        .substring(colonIndex + 1)
        .trim()
        .replace(/^["']|["']$/g, '');
      metadata[key] = value;
    }
  });

  return { metadata, content: bodyContent };
}

// Get all blog posts using Vite's import.meta.glob
export async function getAllPosts(): Promise<Omit<BlogPost, 'content'>[]> {
  try {
    // Use Vite's import.meta.glob to get all MDX files
    const modules = import.meta.glob('/src/content/posts/*.mdx', {
      query: '?raw',
      import: 'default',
    });

    const posts = await Promise.all(
      Object.entries(modules).map(async ([path, resolver]) => {
        const content = (await resolver()) as string;
        const slug = path.split('/').pop()?.replace('.mdx', '') || '';

        const { metadata } = parseFrontmatter(content);

        return {
          slug,
          metadata: {
            title: metadata.title || '',
            publishedAt: metadata.publishedAt || '',
            summary: metadata.summary || '',
            image: metadata.image,
          },
        };
      })
    );

    // Sort posts by publishedAt date (newest first)
    return posts.sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    );
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

// Get a single blog post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    // Use Vite's import.meta.glob to get all MDX files and find the specific one
    const modules = import.meta.glob('/src/content/posts/*.mdx', {
      query: '?raw',
      import: 'default',
    });

    // Find the module that matches the slug
    const targetPath = `/src/content/posts/${slug}.mdx`;
    const resolver = modules[targetPath];

    if (!resolver) {
      console.error(`Post not found: ${slug}`);
      return null;
    }

    const content = (await resolver()) as string;
    const { metadata, content: bodyContent } = parseFrontmatter(content);

    return {
      slug,
      metadata: {
        title: metadata.title || '',
        publishedAt: metadata.publishedAt || '',
        summary: metadata.summary || '',
        image: metadata.image,
      },
      content: bodyContent,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

// Get posts metadata only (for listing pages)
export async function getPostsMetadata(): Promise<
  Array<BlogPost['metadata'] & { slug: string }>
> {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
    ...post.metadata,
  }));
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: 'min-light',
        dark: 'min-dark',
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}
