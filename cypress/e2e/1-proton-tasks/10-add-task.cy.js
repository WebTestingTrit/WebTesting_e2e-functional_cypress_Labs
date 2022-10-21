describe(`GIVEN: the form to add tasks`, () => {
  // Arrange constants
  const sutUrl = 'http://localhost:1234/';
  const selectorFormInput = 'form > input';
  const inputTaskDescription = 'Dummy task one';
  const selectorFormButton = 'form > button';
  const inputButtonText = 'Add task';
  const expectedTaskDescription = 'Dummy task one';
  const selectorIncompleteListLabel = '#incomplete-tasks > li:last-child > label';
  const selectorIncompleteListButton = '#incomplete-tasks > li:last-child > button.delete';

  context(`WHEN: I type a task description and click on _Add task_ `, () => {
    before(() => {
      cy.visit(sutUrl);
      cy.get(selectorFormInput).type(inputTaskDescription);
      cy.get(selectorFormButton).contains(inputButtonText).click();
    });
    it(`THEN: should clear the input box`, () => {
      cy.get(selectorFormInput).should('not.include.value');
    });
    it(`AND: should appear on the _Things to do_ list`, () => {
      cy.get(selectorIncompleteListLabel).should('contain', expectedTaskDescription);
    });
    after(() => {
      cy.get(selectorIncompleteListButton).click();
    });
  });
});
