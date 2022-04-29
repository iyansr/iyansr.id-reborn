import fs from 'fs'
import matter from 'gray-matter'
import { marked } from 'marked'

export function getNowContent() {
	const file = fs.readFileSync('src/content/now.md')
	const parsedFile = matter(file)
	const htmlString = marked(parsedFile.content)

	return htmlString
}
