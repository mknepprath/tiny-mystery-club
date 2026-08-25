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

  it('should navigate to the House exterior', () => {
    cy.get('[data-cy="house-link"]').click({ force: true })
    cy.url().should('include', '/house')
  })

  it('should navigate to Room through the front door', () => {
    cy.get('[data-cy="room-link"]').click({ force: true })
    cy.url().should('include', '/room')
  })
});
