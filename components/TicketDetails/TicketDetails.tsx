'use client'

// services
import { fetchTicket } from '@/services/fetchTickets'

// hooks
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

// components
import CircularProgress from '@mui/material/CircularProgress'
import TicketHeader from '@/components/TicketDetails/TicketHeader'
import TicketInformation from '@/components/TicketDetails/TicketInformation'
import TicketCardAction from '@/components/TicketDetails/TicketCardAction'

// styles
import '@/styles/pages/Ticket.scss'

// types
import type { ReactElement } from 'react'
import type { Ticket } from '@/types/Ticket'

const TicketDetails = (): ReactElement => {
	const [ticket, setTicket] = useState<Ticket | null>(null)
	const [loading, setLoading] = useState(false)
	const { ticketId } = useParams()

	useEffect(() => {
		const getTicket = async () => {
			setLoading(true)
			const ticket = await fetchTicket(ticketId as string)
			setTicket(ticket)
			setLoading(false)
		}
		getTicket()
	}, [ticketId])

	return (
		<div className="ticket">
			{ loading && <div className="loading-container"><CircularProgress /></div> }
			{ !loading && ticket && (
				<main className="ticket-details">
					<TicketHeader ticket={ticket} />
					<div className="ticket-details-container">
						<TicketInformation ticket={ticket} />
						<TicketCardAction ticket={ticket} />
					</div>
				</main>
			) }
		</div>
	)
}

export default TicketDetails