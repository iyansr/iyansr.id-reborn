import { BlogPostDetailResponse } from '@customType/BlogPosts'
import axios from 'axios'
import { useQuery } from 'react-query'

export const fetchBlogPost = async (slug: string) => {
	const response = await axios.request<BlogPostDetailResponse>({
		method: 'GET',
		baseURL: process.env.NEXT_PUBLIC_API_URL,
		url: `/api/blog-posts/slug/${slug}`,
	})

	return response.data
}

const useQueryBlogPost = (slug: string) => {
	return useQuery(['blogPost', slug], () => fetchBlogPost(slug), {
		retry: 1,
	})
}

export default useQueryBlogPost
