export class PDP{
    Class_quantity:string= '.bproduct__action--quantity.simple'
    Input_Quantity_Max:string= '.plus'
    Btn_Agregar_Carrito:string = '#product-addtobuy-button'
    Class_Info_Product:string= '.product-info-main'
    Carrito_Enlace:string='.message-success > div > a'

    Quantity(){return cy.get(this.Class_Info_Product,{timeout:3000})}
    Quantity_Sumar(){return cy.get(this.Input_Quantity_Max);}
    Quantity_Input_Value(){return cy.get(this.Class_quantity)}
    Agregar_checkout(){return cy.get(this.Btn_Agregar_Carrito,{timeout:2000})}
    Enlace_Carrito_PDP(){return cy.get(this.Carrito_Enlace,{timeout:5000})}

};