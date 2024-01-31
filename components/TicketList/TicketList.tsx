import {ReactElement} from 'react'

// styles
import '@/styles/components/TicketList/TicketList.scss'

const TicketList = async (): Promise<ReactElement> => {
    return (
        <div className="ticket-list">
            <h1>TicketList</h1>
        </div>
    )
}

export default TicketList