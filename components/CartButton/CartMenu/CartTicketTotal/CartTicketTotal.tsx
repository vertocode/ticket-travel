import {ReactElement} from 'react'

// styles
import '@/styles/components/CartButton/CartMenu/CartTicketSubtotal/CartTicketSubtotal.scss'
import {Ticket} from "@/types/Ticket";

interface Props {
    tickets: Ticket[]
}

const CartTicketTotal = ({ tickets }: Props): ReactElement => {
    return (
        <div className="cart-ticket-total">
            <h1>CartTicketTotal</h1>
        </div>
    )
}

export default CartTicketTotal