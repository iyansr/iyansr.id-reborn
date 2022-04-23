import { useQuery } from 'react-query'
import blogger from 'src/services/bloggerService'

export const fetchBlogPosts = async () => {
	const response = await blogger.posts.list({
		fetchImages: true,
		orderBy: 'published',
		prettyPrint: true,
		status: ['live'],
	})

	return response.data.items
}

const useQueryBlogPosts = () => {
	return useQuery('blogPosts', fetchBlogPosts)
}

export default useQueryBlogPosts
