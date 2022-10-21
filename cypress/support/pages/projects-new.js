export { ProjectsNew };

class ProjectsNew {
  get nameInput() {
    return cy.get('#name');
  }

  get startInput() {
    return cy.get('#start');
  }

  get endInput() {
    return cy.get('#end');
  }

  get budgetInput() {
    return cy.get('#budget');
  }

  get descriptionInput() {
    return cy.get('#description');
  }

  visit() {
    cy.visit('https://angularbuilders.github.io/angular-budget/');
    cy.get('a').contains('Nuevo').click();
  }

  typeName(value) {
    type('#name', value);
  }

  type(selector, value) {
    cy.get(selector).type(value);
  }

  submit() {
    cy.get('button').click();
  }
}
