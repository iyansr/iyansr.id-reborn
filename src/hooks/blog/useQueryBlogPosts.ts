import { BlogPostListResponse } from '@customType/BlogPosts'
import axios from 'axios'
import { useQuery } from 'react-query'
import qs from 'qs'

export const fetchBlogPosts = async () => {
	const query = qs.stringify(
		{
			populate: '*',
			sort: ['createdAt:desc'],
		},
		{
			encodeValuesOnly: true,
		}
	)
	const response = await axios.request<BlogPostListResponse>({
		method: 'GET',
		baseURL: process.env.NEXT_PUBLIC_API_URL,
		url: `/api/blog-posts?${query}`,
	})

	return response.data
}

const useQueryBlogPosts = () => {
	return useQuery('blogPosts', fetchBlogPosts)
}

export default useQueryBlogPosts
