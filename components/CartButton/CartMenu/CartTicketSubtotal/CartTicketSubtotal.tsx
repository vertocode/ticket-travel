import {ReactElement} from 'react'

// styles
import '@/styles/components/CartButton/CartMenu/CartTicketSubtotal/CartTicketSubtotal.scss'
import {Ticket} from "@/types/Ticket";

// utils
import {formatCurrency} from "@/utils/currency";

interface Props {
    tickets: Ticket[]
}

const CartTicketSubtotal = ({ tickets }: Props): ReactElement => {
    const total = tickets.reduce((acc, ticket) => acc + ticket.price.full, 0)
    const totalWithDiscount = tickets.reduce((acc, ticket) => acc + ticket.price.discount, 0)
    const discountValue = total - totalWithDiscount
    const discountPercentage = (((total - totalWithDiscount) / total) * 100).toFixed(0)
    const portionValue = totalWithDiscount / 10

    return (
        <div className="cart-ticket-subtotal">
            <p className="tickets-value"><span>Ingressos</span><span>{formatCurrency(total)}</span></p>
            <p className="subtotal-value"><span>Subtotal</span><span>{formatCurrency(total)}</span></p>
            <p className="discount-value">
                <span>1X de {formatCurrency(totalWithDiscount)} com desconto de <span className="percentage">({discountPercentage}%)</span></span>
                <span className="discount-value-currency">-{formatCurrency(discountValue)}</span>
            </p>
            <p className="portion-value">
                <span>10X Sem juros de {formatCurrency(portionValue)}</span>
                <span>{formatCurrency(totalWithDiscount)}</span>
            </p>
        </div>
    )
}

export default CartTicketSubtotal