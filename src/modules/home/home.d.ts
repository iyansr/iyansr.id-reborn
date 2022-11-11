import { Blog } from 'contentlayer/generated';

export type HomeProps = {
  blogPosts: Blog[];
};

export type PostCardProps = {
  post: Blog;
};
