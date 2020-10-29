import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { PathType } from '@customType/index'
import marked from 'marked'

export const getAllPost = () => {
	const directoryPath = path.join('src/content/posts')
	const posts = []
	const readDir = fs.readdirSync(directoryPath)

	for (const file of readDir) {
		const markdownWithMetadata = fs.readFileSync(path.join('src/content/posts', file)).toString()
		const parsedMarkdown = matter(markdownWithMetadata)

		posts.push({
			slug: file.replace('.md', ''),
			...parsedMarkdown.data,
			content: parsedMarkdown.content,
		})
	}

	return posts
}

export const getRandomPost = (slug: any) => {
	const directoryPath = path.join('src/content/posts')
	const posts = []
	const readDir = fs.readdirSync(directoryPath).filter((fileDir) => fileDir.replace('.md', '') !== slug)

	for (const file of readDir) {
		const markdownWithMetadata = fs.readFileSync(path.join('src/content/posts', file)).toString()
		const parsedMarkdown = matter(markdownWithMetadata)

		posts.push({
			slug: file.replace('.md', ''),
			...parsedMarkdown.data,
			content: parsedMarkdown.content,
		})
	}

	return posts[Math.floor(Math.random() * readDir.length)]
}

export const gePath = (): PathType[] => {
	const files: string[] = fs.readdirSync('src/content/posts')
	const paths: PathType[] = []

	for (const fileName of files) {
		paths.push({
			params: {
				slug: fileName.replace('.md', ''),
			},
		})
	}

	return paths
}

export const getSinglePost = (slug?: any) => {
	const markdownWithMetadata = fs.readFileSync(path.join('src/content/posts', slug + '.md')).toString()
	const parsedMarkdown = matter(markdownWithMetadata)
	const htmlString = marked(parsedMarkdown.content)
	let data = {
		...parsedMarkdown.data,
		slug,
	}

	return {
		htmlString,
		data,
	}
}
