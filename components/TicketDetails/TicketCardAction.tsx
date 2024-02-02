'use client'
import {ReactElement} from 'react'

// styles
import '@/styles/components/TicketDetails/TicketCardAction.scss'

// types
import {Ticket} from "@/types/Ticket"

// components
import Divider from '@mui/material/Divider'
import Image from "next/image"

// utils
import {formatDate} from "@/utils/date";
import {formatCurrency} from "@/utils/currency";

// hooks
import {useAppDispatch} from "@/lib/hooks";
import { useState } from 'react'

// slices
import { addTicket } from "@/lib/features/cart/cartSlice";

interface Props {
    ticket: Ticket
}

const TicketCardAction = ({ ticket }: Props): ReactElement => {
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const dispatch = useAppDispatch()

    const addToCart = () => {
        dispatch(addTicket(ticket))
        setShowSuccessAlert(true)
    }

    return (
        <div className="ticket-card-action">
            <div className="ticket-date">
                <div className="ticket-info" style={{ paddingTop: 0 }}>
                    <h3 className="sub-title">
                        <Image src="/imgs/calendar.svg" alt="calendar" width={20} height={20} />
                        <span>Data do Ingresso</span>
                    </h3>
                    <p>{ formatDate(ticket.createdAt) }</p>
                </div>
                <Image src="/imgs/arrow-dropdown-down.svg" alt="arrow-right" width={20} height={20} />
            </div>
            <Divider />
            <div className="number-of-tickets">
                <div className="ticket-info">
                    <h3 className="sub-title">
                        <Image src="/imgs/user.svg" alt="calendar" width={20} height={20} />
                        <span>Ingressos</span>
                    </h3>
                    <p>03 ingressos</p>
                </div>
                <Image src="/imgs/arrow-dropdown-down.svg" alt="arrow-right" width={20} height={20} />
            </div>
            <Divider />
            <div>
                <p className="type-of-ticket"><span>01 Ingresso infantil</span> <span>R$245,99</span></p>
                <p className="type-of-ticket"><span>02 Ingresso Adultos</span> <span>R$245,99</span></p>
            </div>
            <Divider />
            <div className="total-value">
                <h3>
                    <span>Valor total</span>
                    <span className="value">{formatCurrency(ticket.price.discount)}</span>
                </h3>
                <div className="buy-ticket-button" onClick={ addToCart }>Comprar Ingresso</div>
                {showSuccessAlert && (
                    <div className="success">
                        Adicionado ao Carrinho com sucesso!
                        <span className="close-button" onClick={ () => setShowSuccessAlert(false) }>X</span>
                    </div>
                )}

            </div>
        </div>
    )
}

export default TicketCardAction