/// <reference types="cypress" />
import { SEARCH_INPUT } from "../../Pages/Search";

describe('Search Product', () => {
    const elements_search = new SEARCH_INPUT();

    beforeEach(() => {
      cy.visit('https://www.elauditor.com.ar')
      cy.url().should("include","elauditor.com.ar",{timeout:5000})
     // cy.CERRAR_POP_UP();
    });

    it('Buscar un producto con el Search Input y verificar su title de la busqueda', () => {
        elements_search.search().type("monitor");
        elements_search.Buscar().click();
        elements_search.Titulo().contains("Monitores").should("be.visible");
    });

    it('Verificar que la lista de productos relacionados a la busqueda MONITORES esté visible.', () => {
        elements_search.search().type("monitor");
        elements_search.Buscar().click();
        elements_search.List_products().should("be.visible");   
    });
});
