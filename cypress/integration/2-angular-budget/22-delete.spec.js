describe('When make a request', () => {
  it('should be sent', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://api-base-21.herokuapp.com/api/pub/projects/test-domination',
    }).then(response => {
      expect(response.status).to.eq(204);
    });
  });
});
