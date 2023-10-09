/// <reference types="cypress" />
import { Newsletter_Suscription } from "../../Pages/Suscripcion_Newsletter";

describe('Verify Subscription Newsletter in home page', () => {
    const elements_newsletter= new Newsletter_Suscription();

    beforeEach(() => {
      cy.visit('https://www.elauditor.com.ar')
      cy.url().should("include","elauditor.com.ar",{timeout:5000})
     // cy.CERRAR_POP_UP();
    });

    it('Verificar suscripcion con formato de Email valido ', () => {
        const randomEmail = Math.random().toString(20).substring(2,20)+"@gmail.com";
        cy.scrollTo("bottom");
        elements_newsletter.txt_titulo().should("be.visible");
        elements_newsletter.email().type(randomEmail);
        elements_newsletter.BTN_suscripcion().click();
        cy.scrollTo("top")
        elements_newsletter.Success_Message().should("be.visible");
    });

    it('Mensaje de error al intentar suscribirse con formato de email invalido  ', () => {
        cy.scrollTo("bottom");
        elements_newsletter.txt_titulo().should("be.visible");
        elements_newsletter.email().type("asdfgh");
        elements_newsletter.BTN_suscripcion().click();
        elements_newsletter.Error_Mensaje().should("be.visible");
    });
});