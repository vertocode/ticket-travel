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
			{ error && <p className="error">{ error }</p> }
			{ loading
				? <TicketListLoading />
				: tickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} />)
			}
			{ showPagination && (
				<Suspense fallback={ <Skeleton /> }>
					<Pagination />
				</Suspense>
			)}
		</div>
	)
}

export default TicketList