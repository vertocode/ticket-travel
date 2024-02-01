import { get } from '@/utils/api'

export const fetchAllTickets = async () => {
    return await get('/tickets')
}

export const fetchTicket = async (id: string) => {
    return await get(`/tickets/${id}`)
}

export const searchTickets = async (query: string) => {
    return await get(`/tickets?search=${query}`)
}

export const fetchTicketsByPagination = async (page: number, limit: number) => {
    return await get(`/tickets?page=${page}&limit=${limit}`)
}