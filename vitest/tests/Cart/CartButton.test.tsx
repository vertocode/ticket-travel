import { expect, test } from 'vitest'
import { screen } from '@testing-library/react'
import CartButton from '@/components/CartButton/CartButton'
import { renderWithProviders } from '@/vitest/utils/testUtils'
import cartItems from '@/vitest/data/cartItems.json'
import { TicketCart } from '@/types/CartState'

const tickets: TicketCart[] = cartItems.map(item => ({ ...item, quantity: 1 }))

test('Cart button shows the number of items when the cart is empty', () => {
	renderWithProviders(<CartButton />)
	const button = screen.getByTestId('cart-button-action-label')
	expect(button.textContent).eq('0')
})

test('Cart button shows the number of items when the cart have items', () => {
	renderWithProviders(<CartButton />, {
		preloadedState: {
			cartReducer: {
				tickets: tickets.slice(1, 3)
			}
		}
	})
	const button = screen.getAllByTestId('cart-button-action-label')
	expect(button[button.length -1].textContent).eq('2')
})


test('Cart menu should be opened when we click on the cart button', async () => {
	const { user } =  renderWithProviders(<CartButton />)

	// check if the cart menu is closed
	const cartMenu = screen.queryByTestId('cart-menu')
	expect(cartMenu).toBeNull()

	// simulates the user clicks
	const cartButton = screen.getAllByTestId('cart-button-action-label')
	await user.click(cartButton[cartButton.length - 1])

	// check if the cart menu is opened
	expect(screen.getByTestId('cart-menu')).toBeDefined()
})