import React, { ReactNode } from 'react'
import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'
import { Tag } from '../types/iyansr'

interface CardProps {
	title: ReactNode | string;
	preview: ReactNode | string;
	tags?: Tag[];
	footer?: ReactNode | string;
	imgUrl: string;
	miniHeader?: ReactNode;
}

const Card = ({ title, preview, tags, footer, imgUrl, miniHeader }: CardProps) => {
	const getTagClassname = (label: string) => {
		switch (label) {
			case 'js':
				return 'tags-js'
			case 'rn':
				return 'tags-rn'
			case 'random':
				return 'tags-rn'

			default:
				return 'tags-rn'
		}
	}
	return (
		<div className='card'>
			<div className='card-image-wrapper'>
				<img className='card-image' src={imgUrl} alt='thumb' />
			</div>

			<div className='card-body'>
				<h1>{title}</h1>
				<Row>
					{tags &&
						tags.map((tag, index: number) => (
							<Col key={index}>
								<span className={`tags ${getTagClassname(tag.type)}`}>{tag.label}</span>
							</Col>
						))}
				</Row>

				<div>{miniHeader}</div>

				{preview}
			</div>

			<div className='card-footer'>{footer}</div>
		</div>
	)
}

export default Card
