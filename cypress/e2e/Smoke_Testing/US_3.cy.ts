/// <reference types="cypress" />
import { LOGIN } from "../../Pages/Login";

describe('Logout User', () => {
    const elements_login= new LOGIN();
    beforeEach(() => {
      cy.visit('https://www.elauditor.com.ar')
      cy.url().should("include","elauditor.com.ar",{timeout:5000})
      cy.clearAllCookies();
   //   cy.CERRAR_POP_UP();
    });
  
    it('Logout exitoso', () => {
        elements_login.INGRESAR_label();
        elements_login.email("test1234@hola.com");
        elements_login.password("Losloros12");
        elements_login.BTN_ENTRAR();
        elements_login.BIENVENIDO().invoke("text").should("include","qa");
        elements_login.BTN_CerrarSession().click({force:true});
        elements_login.URL_HOMEPAGE();
    }); 
});