import { google } from 'googleapis'

const blogger = google.blogger({
	version: 'v3',
	auth: process.env.BLOGGER_API_KEY,
	params: {
		blogId: String(process.env.BLOGGER_BLOG_ID),
	},
})

export default blogger
