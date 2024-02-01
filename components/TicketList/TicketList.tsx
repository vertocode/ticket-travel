'use client'
import {ReactElement} from 'react'

// styles
import '@/styles/components/TicketList/TicketList.scss'

// hocks
import { useTicketsFetch } from '@/hooks/useTicketsFetch'

// components
import TicketListLoading from "@/components/TicketList/TicketListLoading";
import TicketCard from "@/components/TicketList/TicketCard/TicketCard";

const TicketList = (): ReactElement => {
    const { tickets, loading, error } = useTicketsFetch()

    return (
        <div className="ticket-list">
            { error && <p className="error">{ error }</p> }
            {loading
                ? <TicketListLoading />
                : tickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} />)
            }
        </div>
    )
}

export default TicketList