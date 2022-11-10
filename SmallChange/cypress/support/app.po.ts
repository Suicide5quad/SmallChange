export default class AppPage {
    navigate() {
        cy.visit("/");
    }

    checkTitle(title: string) {
        cy.get('p').should('contain.text', title);
    }

    clickAboutLink() {
        cy.get('app-root nav a').contains('About', {timeout: 15000}).click();   
    }
}