// styles
import '@/styles/pages/Home.scss'

// components
import { Suspense } from 'react'
import SearchInput from '@/components/SearchInput/SearchInput'
import Filters from '@/components/Filters/Filters'
import TicketList from '@/components/TicketList/TicketList'
import TicketListLoading from '@/components/TicketList/TicketListLoading'
import Skeleton from '@mui/material/Skeleton'

// types
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Lista de ingressos - Ticket Travel'
}

export default function Home() {
	return (
		<div className="home">
			<header className="search-container">
				<Suspense fallback={<Skeleton />}>
					<SearchInput />
				</Suspense>
			</header>
			<main className="content">
				<Filters />
				<Suspense fallback={<TicketListLoading />}>
					<TicketList />
				</Suspense>
			</main>
		</div>
	)
}
