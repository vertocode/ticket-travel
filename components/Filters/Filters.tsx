import { ReactElement } from 'react'

// components
import Link from 'next/link'
import Price from '@/components/Filters/Price/Price'
import StarsOfProperty from '@/components/Filters/StarsOfProperty/StarsOfProperty'
import Amenities from '@/components/Filters/Amenities/Amenities'
import TypeOfProperty from '@/components/Filters/TypeOfProperty/TypeOfProperty'
import ReviewScore from '@/components/Filters/ReviewScore/ReviewScore'

// styles
import '@/styles/components/Filters/Filters.scss'

const Filters = (): ReactElement => {
	return (
		<div className="filters">
			<header className="filters-header">
				<h2 className="title">Filtro</h2>
				<Link className="clear-filters" href="/">Limpar todos os filtros</Link>
			</header>
			<Price />
			<StarsOfProperty />
			<Amenities />
			<TypeOfProperty />
			<ReviewScore />
		</div>
	)
}

export default Filters