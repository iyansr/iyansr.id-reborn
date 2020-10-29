const readingTime = (content: string): number => {
	const wpm = 200
	let textLength = content.split(' ').length
	let totalRead: number = 0
	if (textLength > 0) {
		totalRead = Math.ceil(textLength / wpm)
	}

	return totalRead
}

export default readingTime
