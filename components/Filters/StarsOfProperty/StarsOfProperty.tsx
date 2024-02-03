import { ReactElement } from 'react'
import Image from 'next/image'
import '@/styles/components/Filters/StarsOfProperty/StarsOfProperty.scss'

// images
import starImg from '@/public/imgs/star.png'

const StarsOfProperty = (): ReactElement => {
	const starsConfig = [
		{ stars: 5, quantity: '134' },
		{ stars: 4, quantity: '134' },
		{ stars: 3, quantity: '72' },
		{ stars: 2, quantity: '75' },
		{ stars: 1, quantity: '07' },
	]

	return (
		<div className="stars-of-property">
			<h3 className="title">Tipo de propriedade</h3>
			<div className="stars">
				{starsConfig.map((star, index) => (
					<div key={index} className="star-button">
						{new Array(star.stars).fill(0).map((_, index) => (
							<Image key={index} src={ starImg } alt="star" width={24} height={24} />
						))}
						<span className="quantity">({star.quantity})</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default StarsOfProperty