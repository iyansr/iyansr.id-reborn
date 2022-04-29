import Meta from '@components/Meta'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { motion } from 'framer-motion'
import SectionOne from '@components/SectionOne'
import SectionTwo from '@components/SectionTwo'
import { GetStaticProps } from 'next'
import SectionThree from '@components/SectionThree'
import { dehydrate, QueryClient } from 'react-query'
import { fetchBlogPosts } from 'src/hooks/blog/useQueryBlogPosts'

const Home = () => {
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
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery('blogPosts', fetchBlogPosts)

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
		revalidate: 60 * 60,
	}
}

export default Home
