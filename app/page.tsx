import '@/styles/Home.scss'
import SearchInput from '@/components/SearchInput/SearchInput'

export default function Home() {
  return (
    <div className="home">
        <header className="search-container">
            <SearchInput />
        </header>
    </div>
  )
}
