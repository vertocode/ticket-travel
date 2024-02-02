import type { ReactElement } from 'react'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider as ProviderStore } from 'react-redux'
import cartReducer from '@/lib/features/cart/cartSlice'

export function Provider(component: ReactElement) {
	const store = configureStore({
		reducer: combineReducers({ cartReducer })
	})

	return <ProviderStore store={store}>{component}</ProviderStore>
}