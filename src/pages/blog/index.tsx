import Layout from '@components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Meta from '@components/Meta'
import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'
import { BlogProps } from '@customType/iyansr'
import { BlogType } from '@customType/blogs'
import Card from '@components/Card'
import moment from 'moment'
import { GetServerSideProps } from 'next'
import { motion } from 'framer-motion'
import { getAllPosts } from '@utils/api'

const Blog: React.FC<BlogProps> = ({ blogs }) => {
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Layout>
				<Head>
					<title>Blog | iyansr.id</title>
					<Meta
						title='Iyan Saputra — Full Stack Developer | iyansr.id'
						description='A Fullstack Developer who passionate about modern mobile and web technology using Node JS, React JS, React Native, and Flutter. And would be a
						fast learner to doing new things and build good teamwork either. Can become a project leader/manager and using tools like Trello to manage
						project and task.'
					/>
				</Head>
				<div className='page-header'>
					<h1>Blog</h1>
					<p>
						<i>If I tell you what happen, it won't happen.</i>
					</p>
				</div>
				<hr className='main-line' />
				<br />

				<div>
					<Row>
						{blogs.map((blog: BlogType) => {
							const wpm = 200
							let textLength = blog.content.split(' ').length
							let totalRead
							if (textLength > 0) {
								totalRead = Math.ceil(textLength / wpm)
							}
							return (
								<Col sm={24} xs={24} md={6} lg={4} key={blog.id}>
									<Card
										title={
											<Link as={`/blog/${blog.slug}`} href='/blog/[slug]'>
												<a>{blog.title}</a>
											</Link>
										}
										imgUrl={blog.thumbnail.url}
										tags={blog.tags}
										preview={<p style={{ marginTop: '20px' }}>{blog.description}</p>}
										miniHeader={
											<p className='mini-header-card'>
												<span role='img'>🗓</span>&nbsp; {moment(blog.published_at, 'YYYY-MM-DD').format('DD MMM YYYY')} &nbsp; | &nbsp;{' '}
												<span role='img'>☕️</span>
												&nbsp; {totalRead} Min Read
											</p>
										}
									/>
								</Col>
							)
						})}
					</Row>
				</div>
			</Layout>
		</motion.div>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const blogs = await getAllPosts()

	return {
		props: {
			blogs,
		},
	}
}

export default Blog
