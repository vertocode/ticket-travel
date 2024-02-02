import { expect, test, vi } from 'vitest'
import { TicketCart } from '@/types/CartState'
import cartItems from '@/vitest/data/cartItems.json'
import CartMenu from '@/components/CartButton/CartMenu/CartMenu'
import { renderWithProviders } from '@/vitest/utils/testUtils'
import { formatDate } from '@/utils/date'
import { deleteTicket } from '@/lib/features/cart/cartSlice'

const tickets: TicketCart[] = cartItems.map(item => ({ ...item, quantity: 1 }))

const {
	container,
	getByTestId,
	getAllByTestId,
	rerender,
	getByText,
	user,
	store
} = renderWithProviders(<CartMenu tickets={[]} />)

test('should match snapshot when there are no tickets', () => {
	expect(container).toMatchSnapshot()
})

test('cart menu should be rendered with a message when there are no tickets', () => {
	expect(getByTestId('empty-cart-message').textContent).eq('Não há ingressos no carrinho.')
})

test('should match snapshot when there are tickets', () => {
	const slicedTickets = tickets.slice(0, 2)
	rerender(<CartMenu tickets={slicedTickets} />)
	expect(container).toMatchSnapshot()
})

test('cart menu should be rendered with tickets', () => {
	const slicedTickets = tickets.slice(0, 2)
	rerender(<CartMenu tickets={slicedTickets} />)
	slicedTickets.forEach(ticket => {
		// check if ticket details are rendered according to the ticket data passed
		const ticketElement = getByText(`${ticket.name} - ${formatDate(ticket.createdAt)}`)

		expect(ticketElement).toBeDefined()
	})
})

test('we should be able to delete tickets in cart menu clicking on trash icon', async () => {
	const delSpy = vi.spyOn(store, 'dispatch')
	const slicedTickets = tickets.slice(0, 2)
	rerender(<CartMenu tickets={slicedTickets} />)

	const trashIcons = getAllByTestId('delete-button')
	await user.click(trashIcons[0])
	expect(delSpy).toHaveBeenCalledWith(deleteTicket(slicedTickets[0].id))
})