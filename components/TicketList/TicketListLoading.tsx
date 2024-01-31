import {ReactElement} from 'react'
import '@/styles/components/TicketList/TicketListLoading.scss'

const TicketListLoading = (): ReactElement => {
    const numberOfTicketsLoading = 6
    const loadingTickets = new Array(numberOfTicketsLoading).fill('')

    return (
        <ul className="ticket-list-loading">
            {loadingTickets.map((_, index) => (
                <li className="ticket-card-loading" key={`loading-ticket-card-${index}`}>
                    <div className="ticket-image-loading">
                        <span className="skeleton-box" style={{ width: '200px', height: '130px' }}></span>
                    </div>
                    <div className="ticket-loading-body">
                        <h3>
                            <span className="skeleton-box" style={{ width: '80%' }}></span>
                            <span className="skeleton-box" style={{ width: '55%' }}></span>
                        </h3>
                        <p>
                            <span className="skeleton-box" style={{ width: '30%' }}></span>
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default TicketListLoading