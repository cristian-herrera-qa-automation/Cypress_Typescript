/// <reference types="cypress" />
import { URL } from "../../Pages/Pages_URL";

describe('Verify Pages Navegations', () => {
    const elements_url= new URL();
    beforeEach(() => {
      cy.visit('https://www.elauditor.com.ar')
      cy.url().should("include","elauditor.com.ar",{timeout:5000})
      cy.CERRAR_POP_UP();
    });

    it('Acceder a Categoria Page', () => {
         elements_url.Acceder_Categorias();
         elements_url.URL_path_Categorias();
    });

    it('Acceder a Resmas Page', () => {
        elements_url.Acceder_Resmas();
        elements_url.URL_path_Resmas();
   });

   it('Acceder a Informatica Page', () => {
    elements_url.Acceder_Informatica();
    elements_url.URL_path_Informatica();
   });

   it('Acceder a Amoblamientos Page', () => {
    elements_url.Acceder_Amoblamientos();
    elements_url.URL_path_Amoblamientos();
   });

   it('Acceder a Electrodomesticos Page', () => {
    elements_url.Acceder_Electrodomesticos();
    elements_url.URL_path_Electrodomesticos();
   });
});