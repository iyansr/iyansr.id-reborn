import Link from 'next/link'
import { format } from 'date-fns'
import { blogger_v3 } from 'googleapis'
import sanitizeHtml from 'sanitize-html'
import readingTime from 'reading-time'
import Image from 'next/image'

const PostCard = ({ post }: { post: blogger_v3.Schema$Post }) => {
	const path = post?.url?.replace(`${process.env.NEXT_PUBLIC_BLOGGER_URL}/`, '').replace('.html', '')
	const image = post.images ? post.images[0].url : null

	const content = sanitizeHtml(String(post.content))
	const _readingTime = readingTime(content)

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
							<a className='font-bold text-lg text-black hover:text-red-custom transition-colors duration-200 line-clamp-2'>{post?.title}</a>
						</Link>
					</div>
					<p className='text-xs text-gray-700'>
						<span role='img'>📅</span>&nbsp; {format(new Date(String(post?.published)), 'dd MMM yyyy')} | <span role='img'>☕️</span>
						&nbsp; {_readingTime.text}
					</p>
				</div>

				<div className='flex-1 line-clamp-3 card-content-body text-sm text-gray-700 mt-2' dangerouslySetInnerHTML={{ __html: content }} />

				<div className='flex flex-wrap'>
					{post?.labels?.map((label, iLabel) => (
						<div key={String(iLabel)} className='text-xs font-medium text-gray-200 px-2 py-1 bg-red-custom mr-2 mt-2 post-card--tag'>
							#{label}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default PostCard
