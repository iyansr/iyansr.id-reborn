import axios from 'axios'
import { blogger_v3 } from 'googleapis'
import { useQuery } from 'react-query'

export const fetchBlogPosts = async () => {
	const response = await axios.request<blogger_v3.Schema$PostList>({
		method: 'GET',
		baseURL: process.env.NEXT_PUBLIC_SITE_URL,
		url: '/api/posts',
	})

	return response.data
}

const useQueryBlogPosts = () => {
	return useQuery('blogPosts', fetchBlogPosts)
}

export default useQueryBlogPosts
