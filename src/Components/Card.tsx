import React, { ReactNode } from 'react'
import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'
import { Tag } from '@customType/blogs'

interface CardProps {
	title: ReactNode | string;
	preview: ReactNode | string;
	tags?: Tag[];
	footer?: ReactNode | string;
	imgUrl: string;
	miniHeader?: ReactNode;
}

const Card = ({ title, preview, tags, footer, imgUrl, miniHeader }: CardProps) => {
	return (
		<div className='card'>
			<div className='card-image-wrapper'>
				<img className='card-image' src={imgUrl} alt='thumb' />
			</div>

			<div className='card-body'>
				<h1>{title}</h1>
				<Row>
					{tags &&
						tags.map((tag: Tag) => (
							<Col key={tag.id}>
								<span className={`tags`} style={{ color: tag.color, background: tag.bg_color }}>
									{tag.name}
								</span>
							</Col>
						))}
				</Row>

				<div>{miniHeader || <p></p>}</div>

				{preview}
			</div>

			<div className='card-footer'>{footer}</div>
		</div>
	)
}

export default Card
