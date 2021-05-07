/// <reference types="Cypress" />

// FEATURE:     list my current projects
// As a:        user with involved in projects
// I want to:   get a list of them
// In order to: follow up my work

// SUT: https://angularbuilders.github.io/angular-budget

// Scenario: complete a task
//  GIVEN: An API with 2 projects
//  WHEN: I visit the projects page
//  THEN: should show 2 items on the projects list

describe('GIVEN: An API with 2 projects', () => {
  before(() => {
    const stubbedApiUrl = 'https://api-base-21.herokuapp.com/api/pub/projects';
    const fixtureData = 'projects';
    cy.intercept(stubbedApiUrl, { fixture: 'projects' });
    // cy.route(stubbedApiUrl, fixtureData);
  });
  context('WHEN: I visit the projects page', () => {
    before(() => {
      const homeSpaUrl = 'https://angularbuilders.github.io/angular-budget';
      cy.visit(homeSpaUrl);
      cy.get('a').contains('Proyectos').click();
    });
    it('THEN: should show 2 items on the projects list', () => {
      const expectedListItemsLength = 2;
      const selectorListItems = 'tbody > tr';
      cy.get(selectorListItems).should('have.length', expectedListItemsLength);
    });
  });
});
