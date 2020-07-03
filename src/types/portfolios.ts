import { Tag } from './blogs'

export interface Portfolio {
	id: string;
	title: string;
	slug: string;
	github_readme: string;
	description: string;
	createdAt: string;
	tags: Tag[];
	image: Image;
	link: PortfolioLink[];
}

export type Portfolios = Portfolio[]

export type Image = {
	id: string,
	url: string,
}

export type PortfolioLink = {
	type: 'github' | 'web',
	url: string,
}
