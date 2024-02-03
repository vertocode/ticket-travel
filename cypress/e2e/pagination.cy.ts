describe('Paginate tickets list', () => {
	before(() => cy.visit('/'))

	it('should paginate the tickets list', () => {
		// check if there are 6 tickets in the list
		cy.get('[data-cy="ticket-card"]').should('have.length', 6)

		// check if the pagination buttons are visible
		cy.get('[data-cy="pagination-item"]').should('have.length', 4)

		// check that page 1 is selected
		cy.get('.Mui-selected').should('have.text', '1')

		// click on the next page button
		cy.get('[data-cy="pagination-item"]').last().click()

		// check that page 2 is selected
		cy.get('.Mui-selected').should('have.text', '2')

		// click on the expanded button, and check if page 4 is appearing
		cy.get('[data-cy="pagination-expand-button"]').click()
		cy.get('[data-cy="pagination-item"]').filter(':contains("4")').should('exist')

		// paginate by select field
		cy.get('[data-cy="pagination-select"]').select('3')

		// check that page 3 is selected
		cy.get('.Mui-selected').should('have.text', '3')
	})
})