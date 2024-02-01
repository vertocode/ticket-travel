'use client'
import {ReactElement} from 'react'

// styles
import '@/styles/components/CartButton/CartMenu/CartMenu.scss'

// hooks
import { useAppSelector } from "@/lib/hooks"

// types
import type {Ticket} from "@/types/Ticket"

interface Props {
    tickets: Ticket[]
}

const CartMenu = ({ tickets }: Props): ReactElement => {
    return (
        <div className="cart-menu">
            <h3 className="title">Ingressos</h3>
            {tickets.length ? (
                <span>tem</span>
            ) : (
                <div className="empty-cart-message">Não há ingressos no carrinho.</div>
            )}
        </div>
    )
}

export default CartMenu