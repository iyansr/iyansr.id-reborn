import { WorkType } from '@customType/index'

const WorkCard = (work: WorkType) => {
	return (
		<div className='border-4 border-gray-800 bg-white post-card'>
			<div className='w-full h-40 relative border-gray-800 border-b-4'>
				<img className='w-full h-40 object-cover' src={work.image} alt={work.name} />
			</div>

			<div className='p-4 flex-1 flex flex-col'>
				<div>
					<div className='h-10'>
						<h1 className='text-xl font-bold text-black hover:text-red-custom transition-colors duration-200 line-clamp-2'>{work.name}</h1>
					</div>

					<div className='flex flex-wrap '>
						{work.stacks.map((tag, iTag) => (
							<div key={iTag} className='text-xs font-medium text-gray-200 px-2 py-1 bg-red-custom mr-2 mt-2 post-card--tag'>
								#{tag}
							</div>
						))}
					</div>
				</div>

				<div className='flex-1 mt-4'>
					<p className='text-sm text-gray-700'>{work.description}</p>
				</div>

				<div className='flex justify-end'>
					{work.github && (
						<a href={work.github} target='_blank' rel='noopener noreferrer' className=' bg-red-custom text-center px-2 py-1'>
							<i className='fab fa-github fa-2x text-base text-white'></i>
						</a>
					)}
				</div>
			</div>
		</div>
	)
}

export default WorkCard
