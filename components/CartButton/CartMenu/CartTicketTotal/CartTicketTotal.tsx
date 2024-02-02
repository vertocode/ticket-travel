import { ReactElement } from 'react'

// styles
import '@/styles/components/CartButton/CartMenu/CartTicketTotal/CartTicketTotal.scss'

// utils
import { formatCurrency } from '@/utils/currency'

// types
import { TicketCart } from '@/types/CartState'


interface Props {
    tickets: TicketCart[]
}

const CartTicketTotal = ({ tickets }: Props): ReactElement => {
	const total = tickets.reduce((acc, ticket) => acc + (ticket.price.discount * ticket.quantity), 0)
	return (
		<div className="cart-ticket-total">
			<h3 className="total"><span>Valor total</span> <span className="value">{formatCurrency(total)}</span></h3>
		</div>
	)
}

export default CartTicketTotal