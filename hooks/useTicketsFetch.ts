// hocks
import {useEffect, useState} from "react";

// types
import type {Ticket} from "@/types/Ticket"

// services
import {fetchTicketsByPagination} from "@/services/fetchTickets";

export const useTicketsFetch = () => {
    const [tickets, setTickets] = useState<Ticket[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        const getTickets = async () => {
            try {
                setError('')
                setLoading(true)
                const tickets = await fetchTicketsByPagination(1, 6)
                setTickets(tickets)
            } catch (e) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }
        getTickets()
    }, [])

    return { tickets, loading, error }
}