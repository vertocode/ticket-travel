import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tickets: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // TODO: just a example, remove it!
        // login(state, action) {
        //     state.currentUser = action.payload
        // }
    }
})

export const { } = cartSlice.actions

export default cartSlice.reducer