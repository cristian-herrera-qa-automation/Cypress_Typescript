/// <reference types="cypress" />
import { POP_UP } from "../../Pages/Pop_Up";

describe.skip('Suscription NewsLetter on Pop-Up', () => {
    const elements_pop_up= new POP_UP(); 
    beforeEach(() => {
      cy.visit('https://www.elauditor.com.ar')
      cy.url().should("include","elauditor.com.ar",{timeout:5000})
    });

    it('Registrarse a Newsletter atravez del Pop-Up exitosamente con email valido', () => {
        const randomEmail = Math.random().toString(20).substring(2,20)+"@gmail.com";
        elements_pop_up.INPUT_EMAIL(randomEmail).should("exist");
        elements_pop_up.BTN_SUSCRIPCION();
        elements_pop_up.Message_Success().contains("p",'Gracias por suscribirte a nuestro Newsletter!');
        elements_pop_up.Cerrar_Pop_up();
    });
});