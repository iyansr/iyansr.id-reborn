import Layout from '@components/Layout'
import Head from 'next/head'
import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'
import Meta from '@components/Meta'

import Github from '../../assets/svg/github-brands.svg'
import Chrome from '../../assets/svg/chrome-brands.svg'
import Card from '../../Components/Card'
import { GetServerSideProps } from 'next'
import { motion } from 'framer-motion'
import { getAllPortfolios } from '@utils/api'
import { Portfolios, Portfolio, PortfolioLink } from '@customType/portfolios'

interface WorkProps {
	portfolios: Portfolios;
}

const Work = ({ portfolios }: WorkProps) => {
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
						{portfolios.map((portfolio: Portfolio) => (
							<Col sm={24} xs={24} md={6} lg={4} key={portfolio.id}>
								<Card
									title={portfolio.title}
									imgUrl={portfolio.image.url}
									tags={portfolio.tags}
									footer={portfolio.link.map((li: PortfolioLink, index: number) => (
										<a href={li.url} target='_blank' rel='noopener noreferrer' className='btn-card-link' key={index}>
											{li.type === 'github' ? <Github className='card-link-icon' /> : <Chrome className='card-link-icon' />}
										</a>
									))}
									preview={portfolio.description}
								/>
							</Col>
						))}
					</Row>
				</div>
			</Layout>
		</motion.div>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const portfolios = await getAllPortfolios()

	return {
		props: {
			portfolios,
		},
	}
}

export default Work
