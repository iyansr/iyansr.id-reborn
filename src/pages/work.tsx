import Layout from '../Components/Layout'
import Head from 'next/head'
import { client } from '../../utils/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'
import Meta from '../Components/Meta'

import Github from '../assets/svg/github-brands.svg'
import Chrome from '../assets/svg/chrome-brands.svg'

interface Tag {
	type: 'js' | 'rn';
	label: string;
}

interface LinkPortfolio {
	type: 'github' | 'web';
	url: string;
}
//

const Work = ({ entries }: any) => {
	const getTagClassname = (label: string) => {
		switch (label) {
			case 'js':
				return 'tags-js'
			case 'rn':
				return 'tags-rn'

			default:
				return ''
		}
	}
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
							<div className='card'>
								<div className='card-image-wrapper'>
									<img className='card-image' src={entry.fields.thumbnail.fields.file.url} alt='thumb' />
								</div>

								<div className='card-body'>
									<h1>{entry.fields.title}</h1>
									<Row>
										{entry.fields.tags.map((tag: Tag, index: number) => (
											<Col key={index}>
												<span className={`tags ${getTagClassname(tag.type)}`}>{tag.label}</span>
											</Col>
										))}
									</Row>

									{documentToReactComponents(entry.fields.preview)}
								</div>

								<div className='card-footer'>
									{entry.fields.links.map((link: LinkPortfolio, index: number) => (
										<a href={link.url} target='_blang' rel='noopener noreferrer' className='btn-card-link' key={index}>
											{link.type === 'github' ? <Github className='card-link-icon' /> : <Chrome className='card-link-icon' />}
										</a>
									))}
								</div>
							</div>
						</Col>
					))}
				</Row>
			</div>
		</Layout>
	)
}

export const getStaticProps = async () => {
	const rawEntry = await client.getEntries()

	return {
		props: {
			entries: rawEntry.items,
		},
	}
}

export default Work
