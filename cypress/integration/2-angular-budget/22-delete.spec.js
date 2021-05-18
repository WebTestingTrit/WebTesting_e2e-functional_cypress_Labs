describe('GIVEN: the app uses an API', () => {
  describe('WHEN: make a delete request', () => {
    it('THEN: should be sent', () => {
      cy.request({
        method: 'DELETE',
        url: 'https://api-base-21.herokuapp.com/api/pub/projects/test-domination',
      }).then(response => {
        expect(response.status).to.eq(204);
      });
    });
  });
});
