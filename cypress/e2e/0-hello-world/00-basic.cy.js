describe('Visiting the url http://localhost:1234/', () => {
  it('should have _ProtonTasks_ on its title', () => {
    cy.visit('http://localhost:1234/');
    cy.title().should('include', 'Proton Tasks');
  });
});
