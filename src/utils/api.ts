import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { FileType } from '@customType/index';
import readingTime from 'reading-time'
import marked from 'marked'

const postsDirectory = path.join(process.cwd(), 'src/pages/blog');

export function getSortedPostsData() {
  // Get file names under /blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: FileType[] = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const slug = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mergedData = { slug, ...matterResult.data,readingTime: readingTime(matterResult.content).text } as any;
    // Combine the data with the i

    return mergedData;
  });
  return allPostsData
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
}

export function getNowContent(){
  const file = fs.readFileSync('src/content/now.md')
  const parsedFile = matter(file)
  const htmlString = marked(parsedFile.content)

 return htmlString
}