describe('Search function by name in a tree', () => {
    beforeEach(() => {
        // Visit the page with the tree component
        cy.visit('URL_of_the_page');
    });

    it('Should highlight matched tree items and keep unmatched ones visible', () => {
        // Input search text and press Enter
        const searchText = 'old';
        cy.get('#search').type(`${searchText}{enter}`);

        // Verify if all tree items are still visible
        cy.get('#assetTree').should('be.visible');

        // Verify if all tree items matching search text are highlighted in green
        cy.get('#assetTree')
            .filter(`:contains(${searchText})`)
            .should('have.css', 'background-color', 'rgb(0, 128, 0)');

        // Verify if all tree items un-matching search text are not highlighted
        cy.get('#assetTree')
            .not(`:contains(${searchText})`)
            .should('not.have.css', 'background-color', 'rgb(0, 128, 0)');
    });
});
