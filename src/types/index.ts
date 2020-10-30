export type FileType = {
	description: string,
	title: string,
	thumbnail: string,
	keyword: string,
	content: string,
	date: string,
	slug: string,
	readingTime: string,
	tags: string[],
}

export type WorkType = {
	name: string,
	description: string,
	github: string | null,
	website: string | null,
	image: string,
	stacks: string[],
}

export type BlogType = {
	children: React.ReactNode | React.ReactChild | React.ReactChild[],
	frontMatter: FrontMatterType,
}

export type FrontMatterType = {
	description: string,
	title: string,
	thumbnail: string,
	keyword: string,
	date: string,
	readingTime: {
		text: string,
	},
	tags: string[],
	wordCount: number,
	__resourcePath: string,
}

export type BlogProps = {
	fileList: FileType[],
}

export type PathType = {
	params: {
		slug: string,
	},
}
