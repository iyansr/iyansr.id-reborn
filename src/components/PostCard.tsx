import Link from 'next/link'
import { format } from 'date-fns'
import Image from 'next/image'
import { Blog } from '@contentlayer/generated'

const PostCard = ({ post }: { post: Blog }) => {
	const path = post.slug
	const image = post.thumbnail

	const excerpt = post.description
	const _readingTime = post.readingTime

	return (
		<div className='border-4 border-gray-800 bg-white post-card'>
			<div className='aspect-w-5 aspect-h-3 relative cursor-pointer bg-gray-400'>
				<Link href='/blog/[slug]' as={`/blog/${path}`}>
					<a>{image && <Image layout='fill' className='aspect-w-2 aspect-h-1 object-cover' src={image} alt={String(post.title)} />}</a>
				</Link>
			</div>
			<div className='p-4 flex-1 flex flex-col'>
				<div>
					<div className='h-16'>
						<Link href='/blog/[slug]' as={`/blog/${path}`}>
							<a className='font-bold text-lg text-black hover:text-red-custom transition-colors duration-200 line-clamp-2'>{post.title}</a>
						</Link>
					</div>
					<p className='text-xs text-gray-700'>
						<span role='img'>📅</span>&nbsp; {format(new Date(String(post.date)), 'dd MMM yyyy')} | <span role='img'>☕️</span>
						&nbsp; {_readingTime.text}
					</p>
				</div>

				<div className='flex-1 line-clamp-3 card-content-body text-sm text-gray-700 mt-2'>{excerpt}</div>

				<div className='flex  flex-wrap'>
					<div className='text-xs font-medium text-gray-200 px-2 py-1 bg-red-custom mr-2 mt-2 post-card--tag'>#{post.tags}</div>
				</div>
			</div>
		</div>
	)
}

export default PostCard
