// types
import { ReactElement } from 'react'

// styles
import '@/styles/components/Filters/TypeOfProperty/TypeOfProperty.scss'

// images
import casaImg from '@/public/imgs/casa.svg'
import casaDisabledImg from '@/public/imgs/casa-disabled.svg'
import apartamentoImg from '@/public/imgs/apartamento.svg'
import apartamentoDisabledImg from '@/public/imgs/apartamento-disabled.svg'
import hotelImg from '@/public/imgs/hotel.svg'
import hotelDisabledImg from '@/public/imgs/hotel-disabled.svg'

// components
import Image from 'next/image'

// hooks
import { useMemo, useState } from 'react'

const TypeOfProperty = (): ReactElement => {
	const [selectedPropertyIndex, setSelectedPropertyIndex] = useState(0)
	const typeOfProperties = useMemo(() => [
		{ type: 'casa', quantity: '346', src: casaImg, srcDisabled: casaDisabledImg },
		{ type: 'Apartamento', quantity: '234', src: apartamentoImg, srcDisabled: apartamentoDisabledImg },
		{ type: 'Hotel', quantity: '23', src: hotelImg, srcDisabled: hotelDisabledImg },
	].map((property, index) => ({
		...property,
		active: index === selectedPropertyIndex
	})), [selectedPropertyIndex])

	return (
		<div className="type-of-property">
			<h3 className="title">Tipo de propriedade</h3>
			<div className="types">
				{typeOfProperties.map((typeOfProperty, index) => (
					<div
						key={index}
						className={`type-button ${typeOfProperty?.active ? 'active' : ''}`}
						onClick={() => setSelectedPropertyIndex(index)}
					>
						<Image height={ 24 } width={ 24 } src={ typeOfProperty?.active ? typeOfProperty.src : typeOfProperty.srcDisabled} alt={typeOfProperty.type} />
						<span className="type">{typeOfProperty.type}</span>
						<span className="quantity">({typeOfProperty.quantity})</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default TypeOfProperty