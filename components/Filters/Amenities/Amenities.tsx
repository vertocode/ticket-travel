import { ReactElement } from 'react'
import { Checkbox } from '@mui/material'
import '@/styles/components/Filters/Amenities/Amenities.scss'

const Amenities = (): ReactElement => {
	const options = [
		'Wi-Fi',
		'Cozinha',
		'Máquina de Lavar',
		'Ar-condicionado',
		'Secadora'
	]

	return (
		<div className="amenities">
			<h3 className="title">Comodidades</h3>
			<div className="options">
				{options.map((option, index) => (
					<div key={index}>
						<Checkbox />
						<span>{option}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default Amenities