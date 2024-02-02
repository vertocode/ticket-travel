import {ReactElement} from 'react'

// styles
import '@/styles/components/TicketList/TicketCard/TicketCard.scss'

// types
import type {Ticket} from "@/types/Ticket"

// components
import Image from "next/image"
import Link from "next/link"
import TicketReview from "@/components/TicketReview/TicketReview"
import Heart from "@/components/TicketList/TicketCard/Heart"

// utils
import {formatCurrency} from "@/utils/currency"

interface Props {
    ticket: Ticket
}

const TicketCard = async ({ ticket }: Props): Promise<ReactElement> => {
    const {
        id,
        image,
        name,
        location,
        price: { full: fullPrice, discount: discountPrice }
    } = ticket

    return (
        <div className="ticket-card">
            <div className="ticket-image">
                <Image width={ 200 } height={ 250 } src={image} alt={name} />
                <span className="ticket-image-label">Ingresso</span>
                <Heart />
            </div>
            <div className="ticket-container">
                <div className="ticket-info">
                    <div className="ticket-info-principal">
                        <h3 className="title">{ ticket.name }</h3>
                        <h4 className="location">
                            <Image src="/imgs/location.png" height={ 30 } width={ 30 } alt="image" />
                            { location }
                        </h4>
                    </div>
                    <TicketReview ticket={ ticket }/>
                </div>
                <div className="ticket-value">
                    <div className="values">
                        <p className="original-value">de R$ {formatCurrency(fullPrice)} por</p>
                        <p className="total-value"><span className="monetary">R$</span> <span>{formatCurrency(discountPrice)}</span> </p>
                    </div>
                    <Link href={ `/ticket/${id}` } className="see-more-button">
                        <span>Saber mais</span>
                        <Image src="/imgs/right-arrow.png" alt="seta-direita" width={ 12 } height={ 12 }/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TicketCard