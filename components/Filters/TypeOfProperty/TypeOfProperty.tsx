import { ReactElement } from 'react'
import Image from 'next/image'
import '@/styles/components/Filters/TypeOfProperty/TypeOfProperty.scss'

const TypeOfProperty = (): ReactElement => {
	const typeOfPropertyConfig = [
		{ type: 'casa', quantity: '346', src: '/imgs/casa.svg', active: true },
		{ type: 'Apartamento', quantity: '234', src: '/imgs/apartamento.svg' },
		{ type: 'Hotel', quantity: '23', src: '/imgs/hotel.svg' },
	]

	return (
		<div className="type-of-property">
			<h3 className="title">Tipo de propriedade</h3>
			<div className="types">
				{typeOfPropertyConfig.map((typeOfProperty, index) => (
					<div key={index} className={`type-button ${typeOfProperty?.active ? 'active' : ''}`}>
						<Image height={ 24 } width={ 24 } src={typeOfProperty.src} alt={typeOfProperty.type} />
						<span className="type">{typeOfProperty.type}</span>
						<span className="quantity">({typeOfProperty.quantity})</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default TypeOfProperty