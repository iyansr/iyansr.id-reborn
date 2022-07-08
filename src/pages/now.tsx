import Meta from '@components/Meta'
import { Section } from '@components/Section'
import { allNows, Now } from 'contentlayer/generated'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ nowContent }) => {
	const Component = useMDXComponent(nowContent.body.code)

	return (
		<>
			<Meta
				title='Now'
				description="What i'm doing right now ?"
			/>

			<Section
				background='purple'
				className='px-4 pb-12'>
				<div className='py-12'>
					<div className='py-12 text-center'>
						<h2 className='title-front text-5xl font-black md:text-6xl lg:text-7xl'>NOW</h2>
						<p className='mt-4 text-sm font-medium text-gray-800 md:text-base lg:text-lg'>🤔 What I'm Doing right now?</p>
					</div>
				</div>
				<div className='mx-auto w-full lg:w-9/12'>
					<div className='rounded-xl border-4 border-gray-800 bg-gray-100 font-medium text-black'>
						<div className='flex gap-2 rounded-t-lg border-b-4 border-gray-800 bg-orange-400 px-4 py-2'>
							<Link href='/'>
								<div className='h-4 w-4 rounded-full bg-red-500' />
							</Link>
							<div className='h-4 w-4 rounded-full bg-yellow-300' />
							<div className='h-4 w-4 rounded-full bg-green-400' />
						</div>
						<div className='px-6 py-8 md:px-12'>
							<div className='post-wrapper mt-8'>
								<Component />
							</div>
						</div>
					</div>
				</div>
			</Section>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const nowContent: Now = allNows[0]

	return {
		props: {
			nowContent,
		},
	}
}

export default Home
