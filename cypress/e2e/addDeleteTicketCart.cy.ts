describe('Add, and delete tickets in the cart - flow', () => {
	beforeEach(() => cy.visit('/'))

	it('should add, and delete items in the cart, and check if it is being reactive in the cart button, and menu', () => {
		// check if cart button starts with 0 items
		cy.get('[data-cy="cart-button"]').should('contains.text', '0')

		// open the ticket page, and add a ticket to the cart
		cy.get('[data-cy="see-more-button"]').first().click()
		cy.url().should('include', '/ticket/1')
		cy.get('[data-cy="buy-ticket-button"]').click()

		// check if there is a success alert after adding the ticket to the cart
		cy.get('[data-cy="success-alert"]').should('exist')

		// check if cart button now contains 1 item
		cy.get('[data-cy="cart-button"]').should('contains.text', '1')

		// add +1 ticket to the cart with the same ticket
		cy.get('[data-cy="buy-ticket-button"]').click()

		// check if the cart button now contains 2 items
		cy.get('[data-cy="cart-button"]').should('contains.text', '2')

		// open the cart menu and check if it contains 2 items
		cy.get('[data-cy="cart-button"]').click()
		cy.get('[data-cy="cart-menu"]')
			.should('exist')
			.and('contains.text', 'Qtd 2')

		// delete 1 item from the cart, and the cart button, and a menu should contain 1 item
		cy.get('[data-cy="delete-ticket-button"]').click()
		cy.get('[data-cy="cart-button"]').should('contains.text', '1')
		cy.get('[data-cy="cart-menu"]').should('contains.text', 'Qtd 1')

		// delete the last item from the cart, and the cart button, and a menu should contain 0 items
		cy.get('[data-cy="delete-ticket-button"]').click()
		cy.get('[data-cy="cart-button"]').should('contains.text', '0')
		cy.get('[data-cy="cart-menu"]').should('contains.text', 'Não há ingressos no carrinho.')
	})
})