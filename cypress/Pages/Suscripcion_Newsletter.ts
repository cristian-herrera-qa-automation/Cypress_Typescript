export class Newsletter_Suscription{
          input_email:string= '#newsletter'
          titulo:string = 'Suscríbete a nuestro newsletter'
          btn_suscribirse:string= '[title="Suscribirse"]'
          Message_success:string= 'Gracias por suscribirse.'
          Message_error = 'Introduzca una dirección válida de correo electrónico (Ex: johndoe@domain.com).'

          email(){return cy.get(this.input_email);}
          txt_titulo(){return cy.contains(this.titulo);}
          BTN_suscripcion(){return cy.get(this.btn_suscribirse);}
          Success_Message(){return cy.contains(this.Message_success,{timeout:5000});}
          Error_Mensaje(){return cy.contains(this.Message_error);}
};