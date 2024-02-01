import {ReactElement} from 'react'

// styles
import '@/styles/components/CartButton/CartMenu/CartTicketTotal/CartTicketTotal.scss'
import {Ticket} from "@/types/Ticket";

// utils
import {formatCurrency} from "@/utils/currency";

interface Props {
    tickets: Ticket[]
}

const CartTicketTotal = ({ tickets }: Props): ReactElement => {
    const total = tickets.reduce((acc, ticket) => acc + ticket.price.full, 0)
    return (
        <div className="cart-ticket-total">
            <h3 className="total"><span>Valor total</span> <span className="value">{formatCurrency(total)}</span></h3>
        </div>
    )
}

export default CartTicketTotal