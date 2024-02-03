describe('Search for specific tickets', () => {
	before(() => cy.visit('/'))

	it('should search for "Praia" and find 2 tickets', () => {
		// search for "praia", and check if it finds 2 tickets
		cy.searchTicket('Praia')
		cy.get('[data-cy="ticket-card"]').should('have.length', 2)

		// check if all tickets contain "Praia" in the title
		cy.get('[data-cy="ticket-card"]').each(ticket => {
			cy.wrap(ticket).should('contains.text', 'Praia')
		})
	})
})