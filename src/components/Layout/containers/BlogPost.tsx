import Meta from '@components/Meta'
import { Section } from '@components/Section'
import { type Blog } from 'contentlayer/generated'
import { format } from 'date-fns'
import { DiscussionEmbed } from 'disqus-react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import { useRouter } from 'next/router'

type BlogPageProps = {
	blogPost: Blog
}

export const BlogPost = ({ blogPost }: BlogPageProps) => {
	const { asPath } = useRouter()
	const Component = useMDXComponent(blogPost.body.code)

	// const updateCodeSyntaxHighlighting = () => {
	// 	document.querySelectorAll('pre code').forEach((block: any) => {
	// 		hljs.highlightBlock(block)
	// 	})
	// }

	// useEffect(() => {
	// 	updateCodeSyntaxHighlighting()
	// })

	return (
		<>
			<Meta
				title={blogPost.title}
				description={blogPost.description}
				image={blogPost.thumbnail}
				url={`${process.env.NEXT_PUBLIC_SITE_URL}${asPath}`}
			/>

			<Section
				background='purple'
				className='pb-12'>
				<div className='flex justify-center space-x-4 px-4'>
					<div className='mt-24 w-full lg:w-9/12'>
						<div className='rounded-xl border-4 border-gray-800 bg-gray-100 font-medium text-black'>
							<div className='flex gap-2 rounded-t-lg border-b-4 border-gray-800 bg-orange-400 px-4 py-2'>
								<Link href='/blog'>
									<div className='h-4 w-4 rounded-full bg-red-500 ' />
								</Link>
								<div className='h-4 w-4 rounded-full bg-yellow-300 ' />
								<div className='h-4 w-4 rounded-full bg-green-400 ' />
							</div>

							<article>
								<div className='relative w-full'>
									<img
										src={blogPost.thumbnail}
										alt={blogPost.title}
										className='z-40 h-full w-full border-b-4 border-gray-800 object-cover'
									/>
								</div>

								<div className='px-6 py-8 md:px-12'>
									<h1 className='text-3xl font-bold leading-tight md:text-5xl'>{blogPost.title}</h1>

									<div className='mt-1 mb-2 flex flex-wrap space-x-2'>
										<div className='post-card--tag mr-2 mt-2 bg-red-custom px-2 py-1 text-xs font-medium text-gray-200'>#{blogPost?.tags}</div>
									</div>

									<div className='mt-4'>
										<p className='text-sm text-gray-600'>
											<span role='img'>📅</span>&nbsp; {format(new Date(blogPost.date), 'dd MMM yyyy')} | <span role='img'>☕️</span>
											&nbsp; 2 Min Read
										</p>
									</div>

									<div className='post-wrapper relative mt-8'>
										<Component />
									</div>
								</div>
							</article>
							<div className='px-6 md:px-12'>
								<DiscussionEmbed
									shortname={process.env.NEXT_PUBLIC_DISCUSS_ID as string}
									config={{
										title: blogPost.title,
										url: `${process.env.NEXT_PUBLIC_SITE_URL}${asPath}`,
										identifier: blogPost.slug,
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</Section>
		</>
	)
}
