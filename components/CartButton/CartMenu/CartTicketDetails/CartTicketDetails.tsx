import {ReactElement} from 'react'

// styles
import '@/styles/components/CartButton/CartMenu/CartTicketDetails/CartTicketDetails.scss'

// types
import type {Ticket} from "@/types/Ticket"

// components
import Divider from '@mui/material/Divider'
import Image from 'next/image'

// utils
import {formatDate} from "@/utils/date"

// hooks
import {useAppDispatch} from "@/lib/hooks";
import {deleteTicket} from "@/lib/features/cart/cartSlice";

interface Props {
    ticket: Ticket
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
                        <Image src="imgs/trash.svg" alt="Deletar" width={ 20 } height={20}/>
                    </span>
                </p>
                <p className="people">1 Adulto: R$500,00 2 2 Crianças: R$234,33</p>
                <Divider />
                <p className="quantity-value"><span>Qtd 02</span> <span>R$ 734,33</span></p>
                <p className="sub-total"><span>Subtotal</span> <span>{ticket.price.discount}</span></p>
            </div>
        </div>
    )
}

export default CartTicketDetails