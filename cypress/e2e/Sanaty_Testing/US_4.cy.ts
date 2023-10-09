/// <reference types="cypress" />
import { REGISTER } from "../../Pages/Register";
const data = require("../../fixtures/data.json")

describe('Logout User', () => {

   const elements_register= new REGISTER();
    beforeEach(() => {
      cy.visit('https://www.elauditor.com.ar')
      cy.url().should("include","elauditor.com.ar",{timeout:5000})
     // cy.CERRAR_POP_UP();
    });
    it('Intentar registrarse con email existente', () => {
        elements_register.acceder_registrarse();
        elements_register.input_nombre(data.name);
        elements_register.input_apellido(data.apellido);
        elements_register.input_correo(data.email);
        elements_register.input_password(data.password);
        elements_register.input_confirm_password(data.password);
        elements_register.BTN_REGISTRARSE();
        elements_register.MESSAGE_email_Existente().should("be.visible");
    });
});