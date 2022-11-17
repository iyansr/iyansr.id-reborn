import { BlogExtended, WorkType } from '@modules/shared/type';

export type HomeProps = {
  blogPosts: BlogExtended[];
  works: WorkType[];
};

export type ArticleProps = {
  blogPosts: BlogExtended[];
};
export type WorkProps = {
  works: WorkType[];
};

export type PostCardProps = {
  post: BlogExtended;
};
