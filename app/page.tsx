// styles
import '@/styles/pages/Home.scss'

// components
import { Suspense } from 'react'
import SearchInput from '@/components/SearchInput/SearchInput'
import Filters from '@/components/Filters/Filters'
import TicketList from '@/components/TicketList/TicketList'
import TicketListLoading from '@/components/TicketList/TicketListLoading'

export default function Home() {
	return (
		<div className="home">
			<header className="search-container">
				<SearchInput />
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
