Cypress.Commands.add('searchTicket', (search: string) => {
	cy.get('[data-cy="search-input"]').type(search)
	cy.get('[data-cy="search-submit-button"]').click()
})