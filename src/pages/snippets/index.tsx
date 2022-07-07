import Meta from '@components/Meta'
import { Section } from '@components/Section'
import { SnippetsCard } from '@components/SnippetsCard'
import { allSnippets, Snippet } from 'contentlayer/generated'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

const Snippets: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ snippets }) => {
	return (
		<>
			<Meta
				title='Snippets'
				description='In Case I Forgot ✌'
				keywords='iyansr blog, iyan saputra blog, blog iyan saputra, software blog, nextjs blog, next js blog, jamstack blog, react blog, markdown blog'
			/>

			<Section
				background='purple'
				className='py-24'>
				<div className='container mx-auto min-h-screen max-w-screen-xl'>
					<div className='py-12 text-center'>
						<h2 className='title-front text-5xl font-black md:text-6xl lg:text-7xl'>MY SNIPPETS</h2>
						<p className='mt-4 text-sm font-medium text-gray-800 md:text-base lg:text-lg'>{'In Case I Forgot ✌'}</p>
					</div>

					<div className='pb-12 pt-6 md:pb-24 md:pt-12'>
						<div className='grid  gap-8 px-8 md:grid-cols-2 md:px-4 lg:grid-cols-3'>
							{snippets?.map((snippet: Snippet) => (
								<SnippetsCard
									{...snippet}
									key={snippet._id}
								/>
							))}
						</div>
					</div>
				</div>
			</Section>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const snippets: Snippet[] = allSnippets

	return {
		props: {
			snippets,
		},
	}
}

export default Snippets
