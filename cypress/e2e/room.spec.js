describe("Room", () => {
  before(() => {
    cy.visit("/room");
  });

  it('should render Room page', () => {
    cy.get('[data-cy="room-page"]').should('be.visible')
  })

  it('should render the trophy', () => {
    cy.get('[data-cy="prize"]').should('be.visible')
  })
});
