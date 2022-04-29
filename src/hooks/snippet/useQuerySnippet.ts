import axios from 'axios'
import { useQuery } from 'react-query'
import { SnippetResponse } from '@customType/Snippets'

export const fetchSnippet = async (slug: string) => {
	const response = await axios.request<SnippetResponse>({
		method: 'GET',
		baseURL: process.env.NEXT_PUBLIC_API_URL,
		url: `/api/snippets/slug/${slug}`,
	})

	return response.data
}

const useQuerySnippet = (slug: string) => {
	return useQuery(['snippet_detail', slug], () => fetchSnippet(slug))
}

export default useQuerySnippet
