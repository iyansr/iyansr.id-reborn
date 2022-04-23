import { GaxiosError } from 'gaxios'
import { NextApiRequest, NextApiResponse } from 'next'
import blogger from 'src/services/bloggerService'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET') {
		return res.status(405).end('Method not allowed')
	}

	try {
		const response = await blogger.posts.list({
			fetchImages: true,
			orderBy: 'published',
			prettyPrint: true,
			status: ['live'],
		})

		return res.status(200).json(response.data)
	} catch (error: GaxiosError | any) {
		return res.status(error?.response?.status ?? 500).json(error?.response?.data ?? {error: true})
	}
}
