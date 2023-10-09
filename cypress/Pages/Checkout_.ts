export class Checkout_Product{                  
      //ELEMENTOS CHECKOUT //   
      
          Class_List:string = '.cart.item'
          Img_Product:string = '.product-image-photo'
          Class_Details:string = '.product-item-details'
          Class_Quantity:string= '.control.qty'
         
          List_Checkout(){return cy.get(this.Class_List);}
          Img_Product_Checkout(){return cy.get(this.Img_Product);}
          Quantity_input_Checkout(){return cy.get(this.Class_Quantity).find("input");}

};