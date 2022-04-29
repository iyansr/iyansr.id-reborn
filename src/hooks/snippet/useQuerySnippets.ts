import axios from 'axios'
import { useQuery } from 'react-query'
import { SnippetsResponse } from '@customType/Snippets'
import qs from 'qs'

export const fetchSnippets = async () => {
	const query = qs.stringify(
		{
			populate: '*',
			sort: ['createdAt:desc'],
		},
		{
			encodeValuesOnly: true,
		}
	)

	const response = await axios.request<SnippetsResponse>({
		method: 'GET',
		baseURL: process.env.NEXT_PUBLIC_API_URL,
		url: `/api/snippets?${query}`,
	})

	return response.data
}

const useQuerySnippets = () => {
	return useQuery('snippet_list', fetchSnippets)
}

export default useQuerySnippets
