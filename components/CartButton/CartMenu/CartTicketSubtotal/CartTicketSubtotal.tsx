import {ReactElement} from 'react'

// styles
import '@/styles/components/CartButton/CartMenu/CartTicketSubtotal/CartTicketSubtotal.scss'
import {Ticket} from "@/types/Ticket";

interface Props {
    tickets: Ticket[]
}

const CartTicketSubtotal = ({ tickets }: Props): ReactElement => {
    return (
        <div className="cart-ticket-subtotal">
            <h1>CartTicketSubtotal</h1>
        </div>
    )
}

export default CartTicketSubtotal