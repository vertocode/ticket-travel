import { ReactElement } from 'react'
import Image from 'next/image'
import '@/styles/components/Filters/TypeOfProperty/TypeOfProperty.scss'

// images
import casaImg from '@/public/imgs/casa.svg'
import apartamentoImg from '@/public/imgs/apartamento.svg'
import hotelImg from '@/public/imgs/hotel.svg'

const TypeOfProperty = (): ReactElement => {
	const typeOfPropertyConfig = [
		{ type: 'casa', quantity: '346', src: casaImg, active: true },
		{ type: 'Apartamento', quantity: '234', src: apartamentoImg },
		{ type: 'Hotel', quantity: '23', src: hotelImg },
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