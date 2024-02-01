import { createSlice } from '@reduxjs/toolkit'
import { CartState } from "@/types/CartState";

const initialState = {
    tickets: [
        {
            "id": "1",
            "name": "Museu de Arte Moderna",
            "location": "Rio de Janeiro, RJ",
            "image": "https://i.postimg.cc/zD6RYYc7/museu-de-arte.jpg",
            "description": "O Museu de Arte Moderna é um espaço cultural dedicado à exibição de obras de arte moderna e contemporânea, destacando-se pela diversidade de artistas e estilos.",
            "price": {
                "full": 2351.28,
                "discount": 1391.28
            },
            "rating": {
                "reviewsCount": 345,
                "value": 4.3
            },
            "createdAt": "2022-08-31T12:32:09.794Z",
            "updatedAt": "2022-08-31T12:32:09.794Z"
        }
    ]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState as CartState,
    reducers: {
        addTicket(state, action) {
            state.tickets.push(action.payload)
        },
        deleteTicket(state, action) {
            state.tickets = state.tickets.filter(ticket => ticket.id !== action.payload)
        }
    }
})

export const { deleteTicket, addTicket } = cartSlice.actions

export default cartSlice.reducer