import Layout from '@components/Layout'
import { Img } from 'react-image'
import Head from 'next/head'
import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'
import Meta from '@components/Meta'
import Axios from 'axios'

import RepoIcon from '../assets/svg/github-brands.svg'
import Star from '../assets/svg/star-regular.svg'
import Fork from '../assets/svg/code-branch-solid.svg'
import { GetServerSideProps } from 'next'
import { motion } from 'framer-motion'

interface IyanRepo {
	id: number;
	node_id: string;
	name: string;
	owner: {
		login: string,
		id: number,
		avatar_url: string,
		html_url: string,
	};
	html_url: string;
	forks_url: string;
	archived: boolean;
	language: string;
	stargazers_count: number;
	description?: string;
}

interface IyanRepos {
	repos: IyanRepo[];
}

const Home = ({ repos }: IyanRepos) => {
	console.log(process.env.API_URL)
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Layout>
				<Head>
					<title>Iyan Saputra — Full Stack Developer | iyansr.id</title>
					<Meta
						title='Iyan Saputra — Full Stack Developer | iyansr.id'
						description='A Fullstack Developer who passionate about modern mobile and web technology using Node JS, React JS, React Native, and Flutter. And would be a
						fast learner to doing new things and build good teamwork either. Can become a project leader/manager and using tools like Trello to manage
						project and task.'
					/>
				</Head>
				<div className='home-container'>
					<br />
					<div className='avatar-wrapper'>
						<Img
							alt='Iyan Saputra'
							src='https://avatars3.githubusercontent.com/u/42711013?s=460&v=4'
							className='avatar'
							loader={<div className='loader'></div>}
						/>
					</div>
					<h1 className='main-name'>I Putu Saputrayana</h1>
					<div className='mini-info'>
						<p>Depok, Indonesia</p>
						<div>
							<p>Software Engineer, React Native Developer</p>
							<p style={{ fontWeight: 'bold' }}>DOOgether</p>
						</div>
					</div>
					<br />
					<hr className='main-line' />
					<div>
						<h1>About</h1>
						<p>
							A Fullstack Developer who passionate about modern mobile and web technology using Node JS, React JS, React Native, and Flutter. And would
							be a fast learner to doing new things and build good teamwork either. Can become a project leader/manager and using tools like Trello to
							manage project and task.
						</p>
						<br />
						<hr className='main-line' />
						<br />
						<h1 className='mb-5'>Contribution Chart</h1>
						<img src='https://ghchart.rshah.org/iyansr' alt='contribution chart' style={{ width: '100%' }} />
					</div>
					<br />
					<hr className='main-line' />
					<h1>Updated Repositories</h1>
					<Row center='xs'>
						{repos
							.filter((repo: IyanRepo) => !repo.archived)
							.slice(0, 6)
							.map((repo: IyanRepo) => (
								<Col xs={24} sm={24} md={4} lg={4} key={repo.id}>
									<div className='repo-card'>
										<div>
											<p>
												<RepoIcon className='repo-icon' />{' '}
												<a href={repo.html_url} target='_blang' rel='noopener noreferrer'>
													{repo.name}
												</a>
											</p>
										</div>
										<div className='repo-desc'>
											<span>{repo.description && repo.description}</span>
										</div>
										<div className='repo-footer'>
											<span>{repo.language}</span> &nbsp; &nbsp; &nbsp;
											<Star className='repo-icon' />
											<span>{repo.stargazers_count}</span> &nbsp; &nbsp; &nbsp;
											<Fork className='repo-icon' />
											<span>{repo.stargazers_count}</span>
										</div>
									</div>
								</Col>
							))}
					</Row>
				</div>
			</Layout>
		</motion.div>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const response = await Axios.get('https://api.github.com/users/iyansr/repos?sort=updated')

	return {
		props: {
			repos: response.data,
		},
	}
}

export default Home
