import {baseUrl_CA} from "../../../cypress.config";
import loginCAObject from "../../support/pageObjectModel/pageObject/competition/loginCAObject";
import registrationInformationObject
    from "../../support/pageObjectModel/pageObject/competition/registrationInformationObject";
describe("Check Regestraion Information",()=>{
    beforeEach(()=>{
        cy.visit(baseUrl_CA)
        loginCAObject.loginCAFunction('58052773','Admin123')
    })
    it('Save as Draft',()=>{
        registrationInformationObject.registrationInformationSaveDraftFunction()

    })
    it.only('text input registration information',()=>{
        registrationInformationObject.registrationInformationSubmitFunction()
    })
})