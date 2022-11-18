import { type Blog, allBlogs } from 'contentlayer/generated';
import { getUnixTime } from 'date-fns';

import { BlogExtended } from '../type';
import { getBase64ImageUrl } from '../utils/getBase64url';

export default async function getPosts(): Promise<BlogExtended[]> {
  const blogs: Blog[] = allBlogs;
  let newBlog: BlogExtended[] = [];

  for (const blog of blogs) {
    const blurDataURL = await getBase64ImageUrl(blog.thumbnail);
    const temp: BlogExtended = {
      ...blog,
      blurDataURL,
    };
    newBlog.push(temp);
  }

  const sortedBlog = newBlog.sort(
    (a, b) => getUnixTime(new Date(b.date)) - getUnixTime(new Date(a.date)),
  );

  return sortedBlog;
}
