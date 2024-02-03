// components
import TicketDetails from '@/components/TicketDetails/TicketDetails'

// types
import { ReactElement } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Detalhes do ingresso - Ticket Travel'
}

const TicketDetailsPage = (): ReactElement => {
	return <TicketDetails />
}

export default TicketDetailsPage