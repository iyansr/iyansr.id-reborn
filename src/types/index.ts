export type FileType = {
	description: string,
	title: string,
	thumbnail: string,
	keyword: string,
	content: string,
	date: string,
	slug: string,
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
	htmlString: string,
	data: FileType,
	randomPost: FileType,
}

export type BlogProps = {
	fileList: FileType[],
}

export type PathType = {
	params: {
		slug: string,
	},
}
