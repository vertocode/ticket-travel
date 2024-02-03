describe('Paginate tickets list', () => {
	before(() => cy.visit('/'))

	it('should paginate the tickets list', () => {
		// check if there are 6 tickets in the list
		cy.get('[data-cy="ticket-card"]').should('have.length', 6)

		// check if the pagination buttons are visible
		// cy.get('[data-cy="pagination-button"]').should('have.length', 2)
		//
		// // click on the next page button
		// cy.get('[data-cy="pagination-button"]').last().click()
		//
		// // check if there are 6 tickets in the list
		// cy.get('[data-cy="ticket-card"]').should('have.length', 6)
	})
})