export type MetaResponse = {
	pagitation: {
		page: number
		pageSize: number
		total: number
		pageCount: number
	}
}

export type SnippetIcon = {
	data: {
		id: number
		attributes: {
			url: string
		}
	}
}

export type Snippet = {
	id: number
	attributes: {
		title: string
		content: string
		createdAt: string
		updatedAt: string
		icon: SnippetIcon
		slug: string
		description: string
	}
}

export type SnippetsResponse = {
	data: Snippet[]
	meta: MetaResponse
}

export type SnippetResponse = {
	data: Snippet
}
