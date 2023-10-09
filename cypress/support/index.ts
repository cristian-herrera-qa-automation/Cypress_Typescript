/// <reference types="cypress" />

declare namespace Cypress{
    interface Chainable {
        CERRAR_POP_UP: ()=> void
        Logearse_exitosamente:()=> void
        Logeo_Incorrecto:()=>void
    }
}
