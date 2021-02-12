import Meta from '@components/Meta'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Form from '@components/Form'
import SectionOne from '@components/SectionOne'
import SectionTwo from '@components/SectionTwo'
import { getSortedPostsData } from '@utils/api'
import { GetStaticProps } from 'next'
import { FileType, BlogProps } from '@customType/index'
import SectionThree from '@components/SectionThree'

const Home = ({ fileList }: BlogProps) => {
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Meta
				title='Iyan Saputra'
				description='A Frontend Developer who passionate about modern mobile and web technology using React JS, React Native, and other React / JS Framework.
				And would be a fast learner to doing new things and build good teamwork either.'
			/>

			<main className='bg-gray-100'>
				<Header />
				<SectionOne />
				<SectionTwo fileList={fileList} />
				<SectionThree />

				<Footer />
			</main>
		</motion.div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const fileList = getSortedPostsData()
	return {
		props: { fileList },
	}
}

export default Home
