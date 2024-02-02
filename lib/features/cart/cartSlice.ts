import { createSlice } from '@reduxjs/toolkit'
import { CartState } from "@/types/CartState";

const initialState = {
    tickets: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState as CartState,
    reducers: {
        addTicket(state, action) {
            const isAlreadyAdded = state.tickets.some(ticket => ticket.id === action.payload.id)
            if (isAlreadyAdded) {
                state.tickets = state.tickets.map(ticket => {
                    if (ticket.id === action.payload.id) {
                        return {
                            ...ticket,
                            quantity: ticket.quantity + 1
                        }
                    }
                    return ticket
                })
            } else {
                state.tickets.push({ ...action.payload, quantity: 1 })
            }
        },
        deleteTicket(state, action) {
            state.tickets = state.tickets.filter(ticket => ticket.id !== action.payload)
        }
    }
})

export const { deleteTicket, addTicket } = cartSlice.actions

export default cartSlice.reducer