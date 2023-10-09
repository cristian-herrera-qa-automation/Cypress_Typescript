export class SEARCH_INPUT{
         input_search:string = '#search'
         btn_buscar:string = '[title="Buscar"]'
         Class_titulo:string = '.breadcrumbs'
         Class_list_products:string= '.products.list.items.product-items > li'

          search(){return cy.get(this.input_search);}
          Buscar(){return cy.get(this.btn_buscar);}
          Titulo(){return cy.get(this.Class_titulo,{timeout:3000})}
          List_products(){return cy.get(this.Class_list_products,{timeout:2000})}
}