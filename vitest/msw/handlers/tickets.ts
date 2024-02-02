import { HttpResponse, http } from 'msw'
import cartItems from '@/vitest/data/cartItems.json'

const API_URL = 'https://65b98494b71048505a8aea91.mockapi.io/api/v1/tickets'

export const ticketHandlers = [
	http.get(API_URL, () => {
		return HttpResponse.json(cartItems)
	})
]