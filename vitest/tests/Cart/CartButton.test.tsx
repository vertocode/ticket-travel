import { expect, test } from 'vitest'
import CartButton from '@/components/CartButton/CartButton'
import { renderWithProviders } from '@/vitest/utils/testUtils'
import cartItems from '@/vitest/data/cartItems.json'
import { TicketCart } from '@/types/CartState'
import { addTicket } from '@/lib/features/cart/cartSlice'

const tickets: TicketCart[] = cartItems.map(item => ({ ...item, quantity: 1 }))

const { getByTestId, rerender, user, queryByTestId, store } =  renderWithProviders(<CartButton />)

test('cart button shows the number of items when the cart is empty',  () => {
	const button = getByTestId('cart-button-action-label')
	expect(button.textContent).eq('0')
})

test('cart button shows the number of items when the cart have items',  () => {
	// add 2 tickets and rerender the component
	store.dispatch(addTicket(tickets[0]))
	store.dispatch(addTicket(tickets[1]))
	rerender(<CartButton /> )

	const button = getByTestId('cart-button-action-label')
	expect(button.textContent).eq('2')
})


test('cart menu should be opened when we click on the cart button', async () => {
	rerender(<CartButton />)

	// check if the cart menu is closed
	const cartMenu = queryByTestId('cart-menu')
	expect(cartMenu).toBeNull()

	// simulates the user clicks
	const cartButton = getByTestId('cart-button-action-label')
	await user.click(cartButton)

	// check if the cart menu is opened
	expect(getByTestId('cart-menu')).toBeDefined()
})