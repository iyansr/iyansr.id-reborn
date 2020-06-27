import Layout from '../Components/Layout'
import Head from 'next/head'
import Meta from '../Components/Meta'

const About = () => {
	return (
		<Layout>
			<Head>
				<title>About | iyansr.id</title>
				<Meta
					title='Iyan Saputra — Full Stack Developer | iyansr.id'
					description='A Fullstack Developer who passionate about modern mobile and web technology using Node JS, React JS, React Native, and Flutter. And would be a
						fast learner to doing new things and build good teamwork either. Can become a project leader/manager and using tools like Trello to manage
						project and task.'
				/>
			</Head>
			<div style={{ display: 'flex', height: '80vh', alignItems: 'center', justifyContent: 'center' }}>
				<h1>Under re-Construction</h1>
			</div>
		</Layout>
	)
}

export default About
