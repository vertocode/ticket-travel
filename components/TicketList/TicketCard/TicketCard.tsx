import {ReactElement} from 'react'

// styles
import '@/styles/components/TicketList/TicketCard/TicketCard.scss'

// types
import type {Ticket} from "@/types/Ticket"

// components
import Image from "next/image"

interface Props {
    ticket: Ticket
}

const TicketCard = async ({ ticket }: Props): Promise<ReactElement> => {
    return (
        <div className="ticket-card">
            <div className="ticket-image">
                <Image width={ 200 } height={ 240 } src={ticket.image} alt={ticket.name} />
                <span className="ticket-image-label">Ingresso</span>
                <Image className="ticket-image-heart" width={ 30 } height={ 30 } src="/imgs/heart.svg" alt="heart" />
            </div>
            <div className="ticket-container">
                <div className="ticket-info">
                    <div className="ticket-info-principal">
                        <h3 className="title">{ ticket.name }</h3>
                        <h4 className="location">
                            <Image src="/imgs/location.png" height={ 30 } width={ 30 } alt="image" />
                            { ticket.location }
                        </h4>
                    </div>
                    <div className="ticket-info-secondary">
                        <div className="ticket-review">
                            { ticket.rating.value }
                        </div>
                        <div className="ticket-review-label">
                            Excellent
                            <span className="number-reviews"> ({ticket.rating.reviewsCount} Reviews)</span>
                        </div>
                    </div>
                </div>
                <div className="ticket-value">

                </div>
            </div>
        </div>
    )
}

export default TicketCard