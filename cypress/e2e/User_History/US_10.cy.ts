/// <reference types="cypress" />
import { Checkout_Product } from "../../Pages/Checkout_";
import { URL } from "../../Pages/Pages_URL";
import { PLP } from "../../Pages/PLP";
import { PDP } from "../../Pages/PDP";

describe('Verify Product quantity in Cart', () => {
    const elements_checkout= new Checkout_Product();
    const elements_pages = new URL();
    const elements_PLP= new PLP();
    const elements_PDP = new PDP();

    before(() => {

      cy.visit('https://www.elauditor.com.ar')
      cy.clearAllCookies();
      cy.url().should("include","elauditor.com.ar",{timeout:5000})
      cy.CERRAR_POP_UP();
      elements_pages.Acceder_Resmas();
      elements_PLP.product().first().click({force:true});
      elements_PDP.Quantity().within(()=>{
           elements_PDP.Quantity_Sumar().click({force:true});
           elements_PDP.Quantity_Sumar().click({force:true});
           elements_PDP.Quantity_Input_Value().find("input").invoke("val").should("eq","3");
           elements_PDP.Agregar_checkout().click({force:true});      
      });   

      elements_PDP.Enlace_Carrito_PDP().click({force:true});
      });
      it('Verificar que la cantidad del producto agregado sea igual en el Checkout ', () => {
            elements_checkout.List_Checkout().within(()=>{
            elements_checkout.Img_Product_Checkout().should("be.visible");
            elements_checkout.Quantity_input_Checkout().invoke("val","eq","3").should("be.visible");
        });
        });
});
