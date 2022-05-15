import Meta from '@components/Meta'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { motion } from 'framer-motion'
import SectionOne from '@components/SectionOne'
import SectionTwo from '@components/SectionTwo'
import { GetStaticProps } from 'next'
import SectionThree from '@components/SectionThree'
import { allBlogs } from 'contentlayer/generated'

const Home = ({ blogPosts }: { blogPosts: any }) => {
	console.log(blogPosts)
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
				<SectionTwo />
				<SectionThree />

				<Footer />
			</main>
		</motion.div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const blogPosts = allBlogs

	return {
		props: {
			blogPosts,
		},
		revalidate: 60 * 60,
	}
}

export default Home
