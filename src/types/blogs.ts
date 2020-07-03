export interface BlogType {
	id: string;
	title: string;
	slug: string;
	description: string;
	published_at: string;
	published: boolean;
	content: string;
	thumbnail: Thumbnail;
	tags: [Tag];
}

export type Blogs = [BlogType]

export interface Tag {
	id: string;
	name: string;
	color: string;
	bg_color: string;
}

export interface Thumbnail {
	id: string;
	url: string;
}
