import Layout from '../../Components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Meta from '../../Components/Meta'
import { client } from '../../../utils/contentful'
import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'
import { BlogProps, BlogEntries } from '../../types/iyansr'
import Card from '../../Components/Card'
import moment from 'moment'
import { GetServerSideProps } from 'next'

const Blog = ({ entries }: BlogProps) => {
	return (
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
					{entries.map((entry: BlogEntries) => {
						const wpm = 200
						let textLength = entry.fields.content.split(' ').length
						let totalRead
						if (textLength > 0) {
							totalRead = Math.ceil(textLength / wpm)
						}
						return (
							<Col sm={24} xs={24} md={6} lg={4} key={entry.sys.id}>
								<Card
									title={
										<Link as={`/blog/${entry.fields.slug}`} href='/blog/[slug]'>
											<a>{entry.fields.title}</a>
										</Link>
									}
									imgUrl={entry.fields.image.fields.file.url}
									tags={entry.fields.tags}
									preview={<p style={{ marginTop: '20px' }}>{entry.fields.preview}</p>}
									miniHeader={
										<p className='mini-header-card'>
											<span role='img'>🗓</span>&nbsp; {moment(entry.sys.createdAt).format('DD MMM YYYY')} &nbsp; | &nbsp; <span role='img'>☕️</span>
											&nbsp; {totalRead} Min Read
										</p>
									}
								/>
							</Col>
						)
					})}

					<script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script>
					<ins
						className='adsbygoogle'
						style={{ display: 'block' }}
						data-ad-format='fluid'
						data-ad-layout-key='-5g+cq+9-gr+u0'
						data-ad-client='ca-pub-6171352055782473'
						data-ad-slot='2517168427'></ins>
					<script
						dangerouslySetInnerHTML={{
							__html: `
(adsbygoogle = window.adsbygoogle || []).push({});
`,
						}}></script>
				</Row>
			</div>
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const rawEntry = await client.getEntries({
		content_type: 'article',
		// 'fields.slug[in]': 'postingan-pertama',
	})

	return {
		props: {
			entries: rawEntry.items,
		},
	}
}

export default Blog
