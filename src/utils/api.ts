import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

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
