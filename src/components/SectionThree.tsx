import { BlogProps, FileType } from '@customType/index'
import WorkCard from '@components/WorkCard'
import Link from 'next/link'

import workData from '@content/portfolio.json'

const SectionThree = () => {
	return (
		<div className='bg-purple-200 overflow-hidden pb-12'>
			<div className='container mx-auto'>
				<div className='text-center py-12'>
					<h2 className='text-5xl md:text-6xl lg:text-7xl font-black title-front'>PORTFOLIO</h2>
					<p className='mt-4 text-sm md:text-base lg:text-lg font-medium text-gray-800'>Projects, experiments and some stuff i've made.</p>
				</div>

				<div className='pb-12 pt-6 md:pb-24 md:pt-12'>
					<div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-12 px-10 md:px-4'>
						{workData.map((file, index) => (
							<WorkCard {...file} key={index} />
						))}
					</div>
				</div>

				<div className='w-full flex justify-center'>
					<Link href='/work'>
						<a>
							<button className='bg-red-custom focus:outline-none px-4 py-2 text-white font-bold article-button border-2 border-gray-900'>
								More Work
							</button>
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default SectionThree
