const SectionOne = () => {
	return (
		<div className='h-screen bg-teal-custom section-one overflow-hidden'>
			<div className='px-4 md:px-8 lg:px-12 md:pt-24 container mx-auto flex flex-col align-middle justify-center h-full'>
				<div className='grid lg:grid-cols-2'>
					<div className='pt-24'>
						<p className='text-lg font-bold text-red-custom'>Hi, I'm</p>
						<h1 className='text-5xl md:text-6xl lg:text-7xl font-black title-front'>IYAN SAPUTRA</h1>

						<p className='mt-4 text-sm md:text-base lg:text-lg font-medium text-gray-800'>
							A Frontend Developer who passionate about modern mobile and web technology using React JS, React Native, and other React / JS Framework.
							And would be a fast learner to doing new things and build good teamwork either.
						</p>
					</div>

					<div className='mt-12 md:mt-0'>
						<img src='/images/me.png' alt='Iyan Saputra' className='mx-auto' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default SectionOne
