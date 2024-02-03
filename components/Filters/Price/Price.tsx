'use client'

// types
import { ReactElement, } from 'react'

// styles
import '@/styles/components/Filters/Price/Price.scss'

// hooks
import { useMemo,useState } from 'react'

const Price = (): ReactElement => {
	const [selectedPriceIndex, setSelectedPriceIndex] = useState(0)
	const prices = useMemo(() => [
		{ startPrice: 'R$ 10,00', endPrice: 'R$ 770,00' },
		{ startPrice: 'R$ 10,00', endPrice: 'R$ 770,00' },
		{ startPrice: 'R$ 10,00', endPrice: 'R$ 770,00' },
		{ startPrice: 'R$ 10,00', endPrice: 'R$ 770,00' }
	].map((price, index) =>  ({
		...price,
		active: index === selectedPriceIndex
	})), [selectedPriceIndex])

	return (
		<div className="price">
			<h3 className="title">Preço</h3>
			<div className="prices">
				{prices.map((price, index) => (
					<div
						key={index}
						className={ `price-button ${price?.active ? 'active' : ''}` }
						onClick={ () => setSelectedPriceIndex(index) }
					>
						<span>{price.startPrice}</span> - <span>{price.endPrice}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default Price