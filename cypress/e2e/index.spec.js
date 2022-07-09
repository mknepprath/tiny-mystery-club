describe("Index", () => {
  before(() => {
    cy.visit("/");
  });

  it('should render Index page', () => {
    cy.get('[data-cy="index-page"]').should('be.visible')
  })

  it('should render the trophy', () => {
    cy.get('[data-cy="prize"]').should('be.visible')
  })

  it('should navigate to Room', () => {
    cy.get('[data-cy="room-link"]').click({ force: true })
    cy.url().should('include', '/room')
  })
});
