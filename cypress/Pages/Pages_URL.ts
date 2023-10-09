export class URL{
      url_path_resmas= '/resmas.html'
      url_path_categorias= '/categories.html'
      url_path_informatica= '/tecnologia-e-informatica.html'
      url_path_electrodomesticos= '/electrodomesticos.html'
      url_path_amoblamientos= '/amoblamientos.html'
      TXT_Resmas= 'Resmas'
      TXT_Informatica= 'Informática'
      TXT_Electrodomesticos= 'Electrodomésticos'
      TXT_Amoblamientos= 'Amoblamientos'
      TXT_Categorias= 'Categorías'

      URL_path_Categorias(){cy.url().should("include",this.url_path_categorias,{timeout:3000});}
      URL_path_Informatica(){cy.url().should("include",this.url_path_informatica,{timeout:3000});}
      URL_path_Electrodomesticos(){cy.url().should("include",this.url_path_electrodomesticos,{timeout:3000});}
      URL_path_Amoblamientos(){cy.url().should("include",this.url_path_amoblamientos,{timeout:3000});}
      URL_path_Resmas(){cy.url().should("include",this.url_path_resmas,{timeout:3000});}

      Acceder_Resmas(){cy.contains(this.TXT_Resmas).click({force:true});}
      Acceder_Informatica(){cy.contains(this.TXT_Informatica).click({force:true});}
      Acceder_Electrodomesticos(){cy.contains(this.TXT_Electrodomesticos).click({force:true});}
      Acceder_Amoblamientos(){cy.contains(this.TXT_Amoblamientos).click({force:true});}
      Acceder_Categorias(){cy.contains(this.TXT_Categorias).click({force:true});}
};