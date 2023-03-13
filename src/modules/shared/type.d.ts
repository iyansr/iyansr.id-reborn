import { type Blog } from 'contentlayer/generated';

export type BlogExtended = Blog & { blurDataURL: string | undefined };

export type WorkType = {
  name: string;
  description: string;
  github: string | null;
  website: string | null;
  image: string;
  blurDataURL?: string;
  stacks: string[];
};
