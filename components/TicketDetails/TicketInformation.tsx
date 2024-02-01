import {ReactElement} from 'react'

// styles
import '@/styles/components/TicketDetails/TicketInformation.scss'

// types
import {Ticket} from "@/types/Ticket";

interface Props {
    ticket: Ticket
}

const TicketInformation = ({ ticket }: Props): ReactElement => {
    return (
        <div className="TicketInformation">
            <h1>TicketInformation</h1>
        </div>
    )
}

export default TicketInformation