import { ReactElement } from 'react'
import '@/styles/components/Filters/Price/Price.scss'

const Price = (): ReactElement => {
	const prices = [
		{ startPrice: 'R$ 10,00', endPrice: 'R$ 770,00', active: true },
		{ startPrice: 'R$ 10,00', endPrice: 'R$ 770,00' },
		{ startPrice: 'R$ 10,00', endPrice: 'R$ 770,00' },
		{ startPrice: 'R$ 10,00', endPrice: 'R$ 770,00' }
	]

	return (
		<div className="price">
			<h3 className="title">Preço</h3>
			<div className="prices">
				{prices.map((price, index) => (
					<div key={index} className={ `price-button ${price?.active ? 'active' : ''}` }>
						<span>{price.startPrice}</span> - <span>{price.endPrice}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default Price