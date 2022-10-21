const sutUrl = 'https://labsademy.github.io/ProtonTasks/';
describe(`GIVEN: the url ${sutUrl}`, () => {
  context(`WHEN: I visit it`, () => {
    before(() => cy.visit(sutUrl));
    const expected = 'Proton Tasks';
    it(`THEN: should have _${expected}_ on its title`, () => {
      cy.title().should('include', expected);
    });
  });
});
