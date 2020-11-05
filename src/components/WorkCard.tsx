import { WorkType } from '@customType/index'
import Image from 'next/image'

const WorkCard = (work: WorkType) => {
	return (
		<div className='bg-secondary rounded-md shadow-md hover:shadow-xl transition duration-200 transform hover:-translate-y-1 post-card flex flex-col'>
			<div className='w-full h-40 relative'>
				<Image layout='fill' className='w-full h-40 object-cover rounded-t-md' src={work.image} alt={work.name} />
			</div>

			<div className='p-4 flex-1 flex flex-col'>
				<div>
					<div className='h-10'>
						<h1 className='text-xl font-bold text-gray-500 hover:text-pink-500 transition-colors duration-200 truncate-2-lines'>{work.name}</h1>
					</div>

					<div className='flex flex-wrap '>
						{work.stacks.map((tag, iTag) => (
							<div key={iTag} className='text-xs font-medium text-gray-200 px-2 rounded-md bg-purple-800 mt-2 mr-2'>
								#{tag}
							</div>
						))}
					</div>
				</div>

				<div className='flex-1 mt-4'>
					<p className='text-sm'>{work.description}</p>
				</div>

				<div className='flex justify-end'>
					{work.github && (
						<a href={work.github} target='_blank' rel='noopener noreferrer' className=' bg-pink-700 text-center rounded-md px-2 py-1 shadow-md'>
							<i className='fab fa-github fa-2x text-base text-secondary'></i>
						</a>
					)}
				</div>
			</div>
		</div>
	)
}

export default WorkCard
