/// <reference types="cypress" />

describe('Login User with incorrect email and password', () => {
  beforeEach(() => {
    cy.visit('https://www.elauditor.com.ar')
    cy.url().should("include","elauditor.com.ar",{timeout:5000})
    //cy.CERRAR_POP_UP();
  });

  it('Login Incorrecto con Email y Password invalidos', () => {
    cy.Logeo_Incorrecto();
  });

});