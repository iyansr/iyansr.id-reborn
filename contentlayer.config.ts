import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files'

import readingTime from 'reading-time'

const computedFields: ComputedFields = {
	readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
	wordCount: {
		type: 'number',
		resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
	},
	slug: {
		type: 'string',
		resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
	},
}

const Blog = defineDocumentType(() => ({
	name: 'Blog',
	filePathPattern: 'blog/*.mdx',
	contentType: 'mdx',
	fields: {
		title: { type: 'string', required: true },
		date: { type: 'string', required: true },
		description: { type: 'string', required: true },
		thumbnail: { type: 'string', required: true },
		tags: { type: 'string' },
		keyword: { type: 'string' },
	},
	computedFields,
}))

const Now = defineDocumentType(() => ({
	name: 'Now',
	filePathPattern: 'now/*.mdx',
	contentType: 'mdx',
	fields: {
		title: { type: 'string', required: true },
	},
	computedFields,
}))

const Snippet = defineDocumentType(() => ({
	name: 'Snippet',
	filePathPattern: 'snippet/*.mdx',
	contentType: 'mdx',
	fields: {
		title: { type: 'string', required: true },
		description: { type: 'string', required: true },
		icon: { type: 'string', required: true },
	},
	computedFields,
}))

const contentLayerConfig = makeSource({
	contentDirPath: 'data',
	documentTypes: [Blog, Now, Snippet],
})

export default contentLayerConfig
