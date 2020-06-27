import Layout from '../Components/Layout'
import Head from 'next/head'
import { client } from '../../utils/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'
import Meta from '../Components/Meta'
import { LinkType } from '../types/iyansr'

import Github from '../assets/svg/github-brands.svg'
import Chrome from '../assets/svg/chrome-brands.svg'
import Card from '../Components/Card'

const Work = ({ entries }: any) => {
	return (
		<Layout>
			<Head>
				<title>My Work | iyansr.id</title>
				<Meta title='My Work | iyansr.id' description={"Projects, experiments and some stuff i've made."} url='https://iyansr.id/work' />
			</Head>

			<div className='page-header'>
				<h1>Portfolio</h1>
				<p>
					<i>Projects, experiments and some stuff i've made.</i>
				</p>
			</div>
			<hr className='main-line' />
			<br />
			<div>
				<Row>
					{entries.map((entry: any, index: number) => (
						<Col sm={24} xs={24} md={6} lg={4} key={index}>
							<Card
								title={entry.fields.title}
								imgUrl={entry.fields.thumbnail.fields.file.url}
								tags={entry.fields.tags}
								footer={entry.fields.links.map((link: LinkType, index: number) => (
									<a href={link.url} target='_blang' rel='noopener noreferrer' className='btn-card-link' key={index}>
										{link.type === 'github' ? <Github className='card-link-icon' /> : <Chrome className='card-link-icon' />}
									</a>
								))}
								preview={documentToReactComponents(entry.fields.preview)}
							/>
						</Col>
					))}
				</Row>
			</div>
		</Layout>
	)
}

export const getStaticProps = async () => {
	const rawEntry = await client.getEntries({
		content_type: 'portfolio',
	})

	return {
		props: {
			entries: rawEntry.items,
		},
	}
}

export default Work
