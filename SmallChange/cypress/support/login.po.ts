export default class LoginPage {
    navigate() {
        cy.visit("/Login");
    }

    checkTitle(title: string) {
        cy.get('p').should('contain.text', title);
    }

    checkTitleFor(title:string)
    {
        cy.get('h2').should('contain.text',title)
    }

    checkALink(title:string)
    {
        cy.get('mat-label').should('contain.text',title)
    }

    checkAboutLogin(title:string)
    {
        cy.get('button').should('contain.text',title)
    }

    checkForAMatButton(title:string)
    {
        cy.get('a').should('contain.text',title)
    }

   
}