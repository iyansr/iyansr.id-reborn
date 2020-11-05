import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'

export const CustomImage = (props: any) => {
	return (
		<Zoom>
			<img {...props} />
		</Zoom>
	)
}

const MDXComponent = {
	img: CustomImage,
}

export default MDXComponent
