// hocks
import {useEffect, useState} from "react";
import { useSearchParams, ReadonlyURLSearchParams } from "next/navigation";

// types
import type {Ticket} from "@/types/Ticket"

// services
import { fetchTicketsByPagination } from "@/services/fetchTickets";

export const useTicketsFetch = () => {
    const [tickets, setTickets] = useState<Ticket[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const searchParams: ReadonlyURLSearchParams = useSearchParams()

    useEffect(() => {
        const getTickets = async () => {
            try {
                setError('')
                setLoading(true)
                const page = Number(searchParams.get('page')) || 1
                const tickets = await fetchTicketsByPagination(page, 6)
                setTickets(tickets)
            } catch (e: unknown) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }
        getTickets()
    }, [searchParams])

    return { tickets, loading, error }
}