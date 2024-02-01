'use client'
import {ReactElement} from 'react'

// styles
import '@/styles/components/CartButton/CartMenu/CartMenu.scss'

// types
import type {Ticket} from "@/types/Ticket"

// components
import Divider from '@mui/material/Divider';
import CartTicketDetails from './CartTicketDetails/CartTicketDetails'
import CartTicketSubtotal from './CartTicketSubtotal/CartTicketSubtotal'
import CartTicketTotal from './CartTicketTotal/CartTicketTotal'

interface Props {
    tickets: Ticket[]
}

const CartMenu = ({ tickets }: Props): ReactElement => {
    return (
        <div className="cart-menu">
            <h3 className="title">Ingressos</h3>
            {tickets.length ? (
                <>
                    {tickets.map(ticket => (
                        <CartTicketDetails
                            ticket={ticket}
                            key={ `ticket-details-${ticket.id}` }
                        />
                    )) }
                    <Divider />
                    <CartTicketSubtotal tickets={ tickets }/>
                    <Divider />
                    <CartTicketTotal tickets={ tickets }/>
                    <div className="check-out-button">Ir para o check out</div>
                </>
            ) : (
                <div className="empty-cart-message">Não há ingressos no carrinho.</div>
            )}
        </div>
    )
}

export default CartMenu