'use client'
import { ReactElement } from 'react'

// styles
import '@/styles/components/TicketList/TicketList.scss'

// hocks
import { useTicketsFetch } from '@/hooks/useTicketsFetch'

// components
import TicketListLoading from '@/components/TicketList/TicketListLoading'
import TicketCard from '@/components/TicketList/TicketCard/TicketCard'
import Pagination from '@/components/TicketList/Pagination/Pagination'
import { Suspense } from 'react'
import Skeleton from '@mui/material/Skeleton'

const TicketList = (): ReactElement => {
	const { tickets, loading, error, showPagination } = useTicketsFetch()

	return (
		<div className="ticket-list">
			{ !loading && error && <p className="error">{ error }</p> }
			{ loading && !error
				? <TicketListLoading />
				: tickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} />)
			}
			{ showPagination && tickets.length && (
				<Suspense fallback={ <Skeleton /> }>
					<Pagination />
				</Suspense>
			)}
			{ !loading && !tickets.length && !error && (
				<p className="empty-list-message">
					No momento, não há ingressos disponíveis. Experimente ajustar seus critérios de busca para encontrar novas oportunidades emocionantes!
				</p>
			)}
		</div>
	)
}

export default TicketList