/// <reference types="cypress"/>

// After, AfterEach, AfterAll
// Before, BeforeEach, BeforeAll

context('Caesar Cypher', () => {
    beforeEach(() => {
        cy.visit('caesar.html');
    });

    it('h1 should have Caesar Cypher', () => {
        cy.get('h1').should('have.text', 'Caesar Cypher');
    });
});

context('Set Cypher key', () => {
    it('Complete values', () => {
        // cy.get('input[type=number]').clear();
        cy.get('#cypher-key-input').type('24');
        cy.get('#cypher-value-input').type('Test Unitaires');
    });

    it('Click on the button', () => {
        cy.get('[data-cy=submit]').click();
    });

    it('Test the result', () => {
        cy.get('#result').contains('Rcqr Slgrygpcq');
    });
});

context('Test js added function', () => {
    it('.dataCy command', () => {
        cy.dataCy('submit');
        // cy.dataCy('cypher-key').should('have.text', '24');
    });
})