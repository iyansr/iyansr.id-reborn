import { BlogProps, FileType } from '@customType/index'
import PostCard from './PostCard'

const SectionTwo = ({ fileList }: BlogProps) => {
	return (
		<div className='bg-yellow-200 pb-24'>
			<div className='container mx-auto'>
				<div className='text-center py-12'>
					<h2 className='text-5xl md:text-6xl lg:text-7xl font-black title-front'>MY ARTICLES</h2>
					<p className='mt-4 text-sm md:text-base lg:text-lg font-medium text-gray-800'>If I tell you what happen, it won't happen.</p>
				</div>

				<div className='pb-12 pt-6 md:pb-24 md:pt-12'>
					<div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-12 px-10 md:px-4'>
						{fileList
							.sort((a: { date: string }, b: { date: string }) => new Date(b.date).getTime() - new Date(a.date).getTime())
							.map((file: FileType, index: number) => (
								<PostCard {...file} key={index} />
							))}
					</div>
				</div>

				<div className='w-full flex justify-center'>
					<button className='bg-red-custom focus:outline-none px-4 py-2 text-white font-bold article-button border-2 border-gray-900'>
						More Articles
					</button>
				</div>
			</div>
		</div>
	)
}

export default SectionTwo
