/// <reference types="cypress"/>

// to go to the bottom --> .scrollTo('bottom');

// open lightbox page
context('Lightbox page', () => {
    beforeEach(() => {
        cy.visit('../../lightbox.html');
    });

    it('Lightbox events', () => {
        // Open the lightbox
        cy.dataCy('overlay').click();
        cy.get("body")
            .invoke('css', 'overflow')
            .should('equal', 'hidden');

        cy.dataCy('lightbox-close').click();
        cy.get("body")
            .invoke('css', 'overflow')
            .should('equal', 'visible');
    });

    it('Like button events', () => {
        // Open the lightbox
        cy.dataCy('overlay').click();
        cy.dataCy('like').click();
        // tester les compteurs
        cy.dataCy('likes-counter').contains('1');
        cy.dataCy('dislike').click();
        cy.dataCy('likes-counter').contains('0');
    });
    
    // Add a comment
    it('Comment events', () => {
        // Open the lightbox
        cy.dataCy('overlay').click();
        cy.dataCy('comment-input').clear();
        cy.dataCy('comment-input').type("Awesome!");
        // Have text awesome
        cy.dataCy('comment-input').should('have.value', "Awesome!");
        cy.dataCy('comment-button').click();

        // Tester que l’ajout d’un commentaire vide est impossible car le bouton "Publish" est désactivé
        cy.dataCy('comment-input').clear();

        // check button visibility
        // Check if contains a class --> cursor-not-allowed
        cy.dataCy('comment-button').should('have.class', 'cursor-not-allowed');
        
        // hide comments button
        cy.dataCy('show-comment-button').click();
        cy.dataCy('show-comment-label').should('contain.text', "Show");

        // -----------------------
        // [Overlay]
        // comment-counter-overlay
        cy.dataCy('comment-counter-overlay').should('contain.text', "1");
        // -----------------------
        // [Lightbox]
        // show-comment-label
        // -----------------------
        cy.dataCy('show-comment-label').should('contain.text', "1");

        // -----------------------
        // 9) Tester le singulier/pluriel en fonction du nombre de commentaires
        // [test singular]
        cy.dataCy('show-comment-label').should('contain.text', "comment");
        // Add a new comment
        cy.dataCy('comment-input').type("Awesome!");
        cy.dataCy('comment-input').should('have.value', "Awesome!");
        cy.dataCy('comment-button').click();
        // [test plural]
        cy.dataCy('show-comment-label').should('contain.text', "comments");
        // -----------------------
        // 10) Enfin, ajouter trois commentaires et tester la suppression du second commentaire
        //      au clique sur la croix associée
        cy.dataCy('comment-input').type("Awesome!");
        cy.dataCy('comment-input').should('have.value', "Awesome!");
        cy.dataCy('comment-button').click();

        // Simuler le clic sur la croix associée (2)
        // ------------------
        // Find sur le second --> puis delete

        // 1) Get sur la div
        cy.dataCy('all-comments').children().eq(2).find('[data-cy=delete-comment]').click();
        // 2) Récupérer le second children eq(2)
        // 3) Action sur le "delete"
    });
});