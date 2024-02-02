'use client'
import React, { ReactElement, ReactNode, useCallback } from 'react'

// components
import Pagination, { PaginationRenderItemParams } from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Link from 'next/link'

// hooks
import { usePagination } from '@/hooks/usePagination'
import { useRouter } from 'next/navigation'


// styles
import '@/styles/components/TicketList/Pagination/Pagination.scss'

const PaginationComponent = (): ReactElement => {
	const router = useRouter()

	const { countPages, page, isExpanded, setIsExpanded, count } = usePagination()

	const renderItem = useCallback((item: PaginationRenderItemParams): ReactNode => {
		// do not show the last page if it's not expanded, it also needs to be a button to expand the pagination
		const isNextButton = item.type === 'next'
		if (!!item.page && item.page > countPages() -1 && !isExpanded && !isNextButton) {
			return <span
				className={ isExpanded ? 'expanded' : 'ellipsis' }
				onClick={ () => setIsExpanded(true) }
			>{ isExpanded ? <PaginationItem {...item} /> : '...' }</span>
		}

		// The only item that don't have a page it the button to expand the pagination
		if (!item.page) {
			return <span
				onClick={ () => setIsExpanded(true) }
			><PaginationItem {...item} /></span>
		}

		return (
			<Link href={`?page=${item.page}`}>
				<PaginationItem
					slots={{ previous: ArrowBackIosIcon, next: ArrowForwardIosIcon }}
					{...item}
				/>
			</Link>
		)
	}, [countPages, isExpanded, setIsExpanded])

	const selectOptions = useCallback(() => {
		const options = []
		for (let page = 1; page <= countPages(); page++) {
			options.push(<option key={page} value={page}>{page.toString().padStart(2, '0')}</option>)
		}
		return (
			<>
                { ...options }
			</>
		)

	}, [countPages])

	return (
		<div className="pagination">
			<span className="count-tickets">{count} Resultados</span>
			<div className="select-pagination">
				<label>
					<span>Página: </span>
					<select onChange={ (e) => router.push(`?page=${e.target.value}`) }>
						{ selectOptions() }
					</select>
				</label>
			</div>
			<Pagination
				page={page}
				count={countPages()}
				siblingCount={10}
				renderItem={ renderItem }
			/>
		</div>
	)
}

export default PaginationComponent