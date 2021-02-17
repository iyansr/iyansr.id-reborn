import Link from 'next/link'
import { FileType } from '@customType/index'
import { format } from 'date-fns'

const PostCard = (file: FileType) => {
	return (
		<div className='border-4 border-gray-800 bg-white post-card'>
			<div className='w-full h-40 relative cursor-pointer border-gray-800 border-b-4'>
				<Link href='/blog/[slug]' as={`/blog/${file.slug}`}>
					<img className='w-full h-40 object-cover ' src={file.thumbnail} alt={file.title} />
				</Link>
			</div>
			<div className='p-4 flex-1 flex flex-col'>
				<div>
					<div className='h-16'>
						<Link href='/blog/[slug]' as={`/blog/${file.slug}`}>
							<a className=' font-bold text-lg text-black hover:text-red-custom transition-colors duration-200 truncate-2-lines'>{file.title}</a>
						</Link>
					</div>
					<p className='text-xs text-gray-700'>
						<span role='img'>📅</span>&nbsp; {format(new Date(file.date), 'dd MMM yyyy')} | <span role='img'>☕️</span>
						&nbsp; {file.readingTime}
					</p>
				</div>

				<div className='flex-1'>
					<p className='truncate-3-lines mt-4 text-sm text-gray-700'>{file.description}</p>
				</div>

				<div className='flex flex-wrap'>
					{file.tags.map((tag, iTag) => (
						<div key={iTag} className='text-xs font-medium text-gray-200 px-2 py-1 bg-red-custom mr-2 mt-2 post-card--tag'>
							#{tag}
						</div>
					))}
				</div>
			</div>
		</div>
		// <div className='bg-secondary rounded-md shadow-md hover:shadow-xl transition duration-200 transform hover:-translate-y-1 post-card flex flex-col'>

		// </div>
	)
}

export default PostCard
