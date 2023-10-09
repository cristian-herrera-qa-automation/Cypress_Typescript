/// <reference types="cypress" />
import { URL } from "../../Pages/Pages_URL";
import { RESMAS } from "../../Pages/Resmas";

describe('Verify the list of products in the Resmas category and the product detail page', () => {
    const elements_pages= new URL();
    const elements_resmas= new RESMAS();

    beforeEach(() => {
      cy.visit('https://www.elauditor.com.ar')
      cy.url().should("include","elauditor.com.ar",{timeout:5000})
     // cy.CERRAR_POP_UP();
    });
   
    it('Verificar que la lista de productos RESMAS esta visible.', () => {
        elements_pages.Acceder_Resmas();
        elements_pages.URL_path_Resmas();
        elements_resmas.list_products_resmas().should("be.visible");    
    });

    it('Verificar que los datos del 1°producto de la lista estan visibles en su PDP ', () => {
      elements_pages.Acceder_Resmas();
      elements_pages.URL_path_Resmas();
      elements_resmas.Product_1().first().click({force:true});
      elements_resmas.IMG_product().should("be.visible");
      elements_resmas.Disponibilidad().should("be.visible");
      elements_resmas.Precio_producto().should("be.visible");
    });
});