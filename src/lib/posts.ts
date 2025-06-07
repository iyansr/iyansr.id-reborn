import matter from 'gray-matter';
import { marked } from 'marked';
import markedShiki from 'marked-shiki';
import { getSingletonHighlighter } from 'shiki';

type Post = {
  slug: string;
  publishedAt: string;
  title: string;
  summary: string;
  image: string;
};

const highlighter = await getSingletonHighlighter({
  themes: ['gruvbox-light-hard'],
  langs: [
    'javascript',
    'typescript',
    'python',
    'rust',
    'go',
    'bash',
    'md',
    'mermaid',
  ],
});

marked.use(
  markedShiki({
    highlight(code, lang) {
      return highlighter.codeToHtml(code, {
        lang,
        theme: 'gruvbox-light-hard',
      });
    },

    container: `<div class="mockup-code bg-[#f9f5d7] w-full">%s</div>
   `,
  }),
);

const markdownModules = import.meta.glob('../contents/posts/*.md', {
  query: 'raw',
});

export async function loadPostById(id: string) {
  const path = `../contents/posts/${id}.md`;
  const importer = markdownModules[path];
  if (!importer) {
    throw new Error(`Post "${id}" not found`);
  }

  const rawMdModule = await importer();
  const rawMd = (rawMdModule as { default: string }).default;
  return rawMd;
}

export async function getParsedPost(id: string) {
  const raw = await loadPostById(id);
  const { content, data } = matter(raw);
  const html = await marked(content);

  return {
    html,
    metadata: data, // e.g. title, date
  };
}

export async function listPosts() {
  // Get all markdown file importers
  const entries = Object.entries(markdownModules);

  // Load all posts and extract metadata
  const posts = await Promise.all(
    entries.map(async ([path, importer]) => {
      const rawMdModule = await importer();
      const rawMd = (rawMdModule as { default: string }).default;
      const { data } = matter(rawMd);
      // Extract slug from path, e.g. '../contents/posts/hello.md' -> 'hello'
      const slug = path.match(/\/([^/]+)\.md$/)?.[1] ?? '';
      return {
        slug,
        ...data, // expects data to have at least a 'date' field
      } as Post;
    }),
  );

  // Sort posts by date descending
  posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return posts;
}
