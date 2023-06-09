describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    console.log("env is not here")
    cy.visit(Cypress.env('API_SERVER'))

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it
    cy.get('.action-email').type('fake@email.com')

    //  Verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})
