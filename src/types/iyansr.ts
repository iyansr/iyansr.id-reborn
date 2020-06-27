export interface Tag {
	type: 'js' | 'rn';
	label: string;
}

export interface LinkType {
	type: 'github' | 'web';
	url: string;
}

export interface BlogEntries {
	fields: BlogFields;
	sys: ContentfulSys;
}

export interface ContentfulSys {
	createdAt: string;
	id: string;
	updatedAt: string;
}

export interface BlogFields {
	title: string;
	slug: string;
	image: any;
	preview: string;
	content: string;
	tags: Tag[];
}

export interface BlogProps {
	entries: BlogEntries[];
}
