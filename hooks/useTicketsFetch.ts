// hocks
import {useEffect, useState} from "react";
import { useSearchParams, ReadonlyURLSearchParams } from "next/navigation";

// types
import type {Ticket} from "@/types/Ticket"

// services
import {fetchTicketsByPagination, searchTickets} from "@/services/fetchTickets";

export const useTicketsFetch = () => {
    const [tickets, setTickets] = useState<Ticket[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [showPagination, setShowPagination] = useState(false);
    const searchParams: ReadonlyURLSearchParams = useSearchParams()

    useEffect(() => {
        const getTickets = async () => {
            try {
                setShowPagination(false)
                setError('')
                setLoading(true)
                const page = Number(searchParams.get('page')) || 1
                const search = searchParams.get('search') || null
                let tickets: Ticket[] = []
                if (search) {
                    tickets = await searchTickets(search)
                } else {
                    tickets = await fetchTicketsByPagination(page, 6)
                    setShowPagination(true)
                }
                setTickets(tickets)
            } catch (e: unknown) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }
        getTickets()
    }, [searchParams])

    return { tickets, loading, error, showPagination }
}