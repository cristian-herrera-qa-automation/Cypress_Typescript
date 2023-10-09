
export class REGISTER{
    btn_registrarse_homepage:string= 'Registrarse'
    nombre:string= '#firstname'
    apellido:string= '#lastname'
    correo_electronico:string= '#email_address_create'
    contraseña:string= '#password-social'
    confirmation_contraseña:string= '#password-confirmation-social'
    btn_registrarse:string= '#button-create-social'
    Txt_emailExistente:string= 'There is already an account with this email address. If you are sure that it is your email address, '

    acceder_registrarse(){cy.contains(this.btn_registrarse_homepage).click();}
    input_nombre(data:string){cy.get(this.nombre).type(data);}
    input_apellido(data:string){cy.get(this.apellido).type(data);}
    input_correo(data:string){cy.get(this.correo_electronico).type(data);}
    input_password(data){cy.get(this.contraseña).type(data);}
    input_confirm_password(data){cy.get(this.confirmation_contraseña).type(data);}
    BTN_REGISTRARSE(){cy.get(this.btn_registrarse).click();}
    MESSAGE_email_Existente(){return cy.contains(this.Txt_emailExistente);}
};