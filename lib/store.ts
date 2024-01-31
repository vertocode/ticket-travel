import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from "@/lib/features/cart/cartSlice";

export const makeStore = () => {
    return configureStore({
        reducer: combineReducers({
            cartReducer
        })
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
