import { ReactElement } from 'react'

// styles
import '@/styles/components/CartButton/CartMenu/CartTicketDetails/CartTicketDetails.scss'

// components
import Divider from '@mui/material/Divider'
import Image from 'next/image'

// utils
import { formatDate } from '@/utils/date'

// hooks
import { useAppDispatch } from '@/lib/hooks'

// slices
import { deleteTicket } from '@/lib/features/cart/cartSlice'

// types
import { TicketCart } from '@/types/CartState'
import { formatCurrency } from '@/utils/currency'

interface Props {
    ticket: TicketCart
}

const CartTicketDetails = ({ ticket }: Props): ReactElement => {
	const dispatch = useAppDispatch()

	const handleDelete = () => {
		dispatch(deleteTicket(ticket.id))
	}

	return (
		<div className="cart-ticket-details">
			<Image src={ ticket.image } alt={ ticket.name } width={ 70 } height={ 70 } style={{ objectFit: 'cover' }}/>
			<div className="cart-ticket-details-info">
				<p className="title">
					<span>{ ticket.name } - {formatDate(ticket.createdAt)}</span>
					<span className="delete-button" onClick={ handleDelete }>
						<Image src="/imgs/trash.svg" alt="Deletar" width={ 20 } height={20}/>
					</span>
				</p>
				<p className="people">1 Adulto: R$500,00 2 2 Crianças: R$234,33</p>
				<Divider />
				<p className="quantity-value"><span>Qtd {ticket.quantity}</span> <span>{formatCurrency(ticket.price.discount)}</span></p>
				<p className="sub-total"><span>Subtotal</span> <span>{formatCurrency(ticket.price.discount * ticket.quantity)}</span></p>
			</div>
		</div>
	)
}

export default CartTicketDetails