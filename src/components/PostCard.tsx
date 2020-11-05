import Link from 'next/link'
import { FileType } from '@customType/index'
import Image from 'next/image'
import { format } from 'date-fns'

const PostCard = (file: FileType) => {
	return (
		<div className='bg-secondary rounded-md shadow-md hover:shadow-xl transition duration-200 transform hover:-translate-y-1 post-card flex flex-col'>
			<div className='w-full h-40 relative'>
				<Image layout='fill' className='w-full h-40 object-cover rounded-t-md' src={file.thumbnail} alt={file.title} />
			</div>

			<div className='p-4 flex-1 flex flex-col'>
				<div>
					<div className='h-16'>
						<Link href='/blog/[slug]' as={`/blog/${file.slug}`}>
							<a className=' font-bold text-lg text-gray-500 hover:text-pink-500 transition-colors duration-200 truncate-2-lines'>{file.title}</a>
						</Link>
					</div>
					<p className='text-xs text-gray-600'>
						<span role='img'>📅</span>&nbsp; {format(new Date(file.date), 'dd MMM yyyy')} | <span role='img'>☕️</span>
						&nbsp; {file.readingTime}
					</p>
				</div>

				<div className='flex-1'>
					<p className='truncate-3-lines mt-4 text-sm'>{file.description}</p>
				</div>

				<div className='flex flex-wrap'>
					{file.tags.map((tag, iTag) => (
						<div key={iTag} className='text-xs font-medium text-gray-200 px-2 rounded-md bg-purple-800 mr-2 mt-2'>
							#{tag}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default PostCard
