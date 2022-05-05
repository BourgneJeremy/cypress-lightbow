/// <reference types="cypress"/>

context('Hello world!', () => {
    beforeEach(() => {
        cy.visit('../../index.html');
    });

    it('p should have text Hello world!', () => {
        cy.get('p').should('have.text', 'hello world!');
    });
});