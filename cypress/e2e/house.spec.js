describe("House", () => {
  before(() => {
    cy.visit("/house");
  });

  it('should render House page', () => {
    cy.get('[data-cy="house-page"]').should('be.visible')
  })

  it('should render the trophy', () => {
    cy.get('[data-cy="prize"]').should('be.visible')
  })

  it('should navigate back to the village', () => {
    cy.get('[data-cy="village-link"]').click({ force: true })
    cy.url().should('not.include', '/house')
  })
});
