import {ReactElement} from 'react'

// types
import {Ticket} from "@/types/Ticket";

// styles
import '@/styles/components/TicketDetails/TicketHeader.scss'

interface Props {
    ticket: Ticket
}

const TicketHeader = ({ ticket }: Props): ReactElement => {
    return (
        <div className="ticket-header">
            <div className="title-container">

            </div>
        </div>
    )
}

export default TicketHeader