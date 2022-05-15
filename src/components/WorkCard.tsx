import Image from 'next/image'

type WorkType = {
	name: string
	description: string
	github: string | null
	website: string | null
	image: string
	stacks: string[]
}

const WorkCard = (work: WorkType) => {
	return (
		<div className='border-4 border-gray-800 bg-white post-card'>
			<div className='aspect-w-5 aspect-h-3 relative cursor-pointer bg-gray-400'>
				<Image layout='fill' className='aspect-w-2 aspect-h-1 object-cover' src={work.image} alt={String(work.name)} />
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
