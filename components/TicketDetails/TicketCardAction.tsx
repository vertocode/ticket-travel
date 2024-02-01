import {ReactElement} from 'react'

// styles
import '@/styles/components/TicketDetails/TicketCardAction.scss'

// types
import {Ticket} from "@/types/Ticket";

interface Props {
    ticket: Ticket
}

const TicketCardAction = ({ ticket }: Props): ReactElement => {
    return (
        <div className="TicketCardAction">
            <h1>TicketCardAction</h1>
        </div>
    )
}

export default TicketCardAction