import { GaxiosError } from 'gaxios'
import { NextApiRequest, NextApiResponse } from 'next'
import blogger from 'src/services/bloggerService'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET') {
		return res.status(405).end('Method not allowed')
	}

	const paths = req.query?.path as string[]
	const joinPath = paths?.join('/')

	try {
		const response = await blogger.posts.getByPath({
			path: `/${joinPath}.html`,
			prettyPrint: true,
		})

		return res.status(200).json(response.data)
	} catch (error: GaxiosError | any) {
		return res.status(error?.response?.status ?? 500).json(error?.response?.data ?? { error: true })
	}
}
