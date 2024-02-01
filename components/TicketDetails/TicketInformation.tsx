import {ReactElement} from 'react'

// styles
import '@/styles/components/TicketDetails/TicketInformation.scss'

// types
import {Ticket} from "@/types/Ticket"

// components
import TicketReview from "@/components/TicketReview/TicketReview"
import Image from 'next/image'

interface Props {
    ticket: Ticket
}

const TicketInformation = ({ ticket }: Props): ReactElement => {
    const amenities = [
        { name: 'Passagem Aérea', src: '/imgs/airline-ticket.svg' },
        { name: 'Wi-fi', src: '/imgs/wi-fi.svg' },
        { name: 'Café de manhã', src: '/imgs/coffee.svg' },
        { name: 'Quarto', src: '/imgs/dark-casa.svg' },
    ]

    return (
        <div className="ticket-information">
            <div className="ticket-review">
                <TicketReview ticket={ ticket } />
            </div>
            <div className="ticket-amenities">
                {amenities.map((amenity, index) => (
                    <div key={index} className="item">
                        <Image src={amenity.src} alt={amenity.name} width={20} height={20} />
                        <span>{amenity.name}</span>
                    </div>
                ))}
            </div>
            <div className="ticket-description">
                <h2>Sobre o Ingresso selecionado:</h2>
                <p>{ticket.description}</p>
            </div>

            <div className="ticket-location">
                <h2>Localização</h2>
                <div className="ticket-location-image">
                    <Image src="/imgs/san-francisco-location.jpg" alt="location" fill />
                </div>
            </div>
        </div>
    )
}

export default TicketInformation