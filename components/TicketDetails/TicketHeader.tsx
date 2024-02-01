import {ReactElement} from 'react'

// types
import {Ticket} from "@/types/Ticket";

// styles
import '@/styles/components/TicketDetails/TicketHeader.scss'

// components
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    ticket: Ticket
}

const TicketHeader = ({ ticket }: Props): ReactElement => {
    return (
        <div className="ticket-header">
            <div className="title-container">
                <h1 className="title">
                    <Link href="/" className="image"> <Image src="/imgs/arrow-back.svg" alt="support" width={ 40 } height={40} /> </Link>
                    <span>{ ticket.name }</span>
                </h1>
                <p className="location">
                    <Image src="/imgs/location.png" height={ 30 } width={ 30 } alt="image" />
                    <span>{ ticket.location }</span>
                </p>
            </div>
        </div>
    )
}

export default TicketHeader