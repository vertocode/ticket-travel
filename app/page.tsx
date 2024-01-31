// styles
import '@/styles/pages/Home.scss'

// components
import SearchInput from '@/components/SearchInput/SearchInput'
import Filters from '@/components/Filters/Filters'
import TicketList from '@/components/TicketList/TicketList'

export default function Home() {
  return (
    <div className="home">
        <header className="search-container">
            <SearchInput />
        </header>
        <main className="content">
            <Filters />
            <TicketList />
        </main>
    </div>
  )
}
