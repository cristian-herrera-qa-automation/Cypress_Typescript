/// <reference types="cypress" />

describe('Login User with correct email and password', () => {
    beforeEach(() => {
      cy.visit('https://www.elauditor.com.ar')
      cy.url().should("include","elauditor.com.ar",{timeout:5000})
      cy.CERRAR_POP_UP();
    });
  
    it('Login exitoso con Email y Password validos', () => {
        cy.Logearse_exitosamente();
    });
});