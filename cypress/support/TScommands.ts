/// <reference types="cypress" />

import { LOGIN } from "../Pages/Login";
const elements_login= new LOGIN();

Cypress.Commands.add("CERRAR_POP_UP",()=>{ 
    cy.wait(5000);
    if (cy.get('#mp-popup-template3')) {
        cy.get('#bio_ep_close').click();
    };
});

Cypress.Commands.add("Logearse_exitosamente",()=>{
    
    elements_login.INGRESAR_label();
    elements_login.email("test1234@hola.com");
    elements_login.password("Losloros12");
    elements_login.BTN_ENTRAR();
    elements_login.URL_HOMEPAGE();
});

Cypress.Commands.add("Logeo_Incorrecto",()=>{
    elements_login.INGRESAR_label();
    elements_login.email("test1234@hola.com");
    elements_login.password("123456789");
    elements_login.BTN_ENTRAR();
    elements_login.Mensaje_InicioSession_Incorrecto().should("be.visible");
});