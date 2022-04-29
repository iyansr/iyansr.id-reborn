export type BlogPostMetaResponse = {
	pagitation: {
		page: number
		pageSize: number
		total: number
		pageCount: number
	}
}

export type BlogPostImageCover = {
	data: {
		id: number
		attributes: {
			url: string
		}
	}
}

export type BlogLabel = {
	id: number
	attributes: {
		text: string
		createdAt: string
		updatedAt: string
	}
}

export type BlogPost = {
	id: number
	attributes: {
		title: string
		slug: string
		content: string
		createdAt: string
		updatedAt: string
		excerpt: string
		cover: BlogPostImageCover
		labels: {
			data: BlogLabel[]
		}
	}
}

export type BlogPostListResponse = {
	data: BlogPost[]
	meta: BlogPostMetaResponse
}
