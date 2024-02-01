import { createSlice } from '@reduxjs/toolkit'
import { CartState } from "@/types/CartState";

const initialState = {
    tickets: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState as CartState,
    reducers: {
        // TODO: just a example, remove it!
        // login(state, action) {
        //     state.currentUser = action.payload
        // }
    }
})

export const { } = cartSlice.actions

export default cartSlice.reducer