import {baseUrl_CA} from "../../../cypress.config";
import loginCAObject from "../../support/pageObjectModel/pageObject/competition/loginCAObject";
import registrationInformationObject
    from "../../support/pageObjectModel/pageObject/competition/registrationInformationObject";
    import exportRegisAcctData from "../../fixtures/competition/registrationAcctData/exportRegisAcctData.json"
describe("Check Regestraion Information",()=>{
    beforeEach(()=>{
        cy.visit(baseUrl_CA)
        loginCAObject.loginCAFunction(exportRegisAcctData.corporateCode,exportRegisAcctData.corporateCode)
    })
    it('Save as Draft',()=>{
        registrationInformationObject.registrationInformationSaveDraftFunction()

    })
    it.only('text input registration information',()=>{
        registrationInformationObject.registrationInformationSubmitFunction()
    })
})