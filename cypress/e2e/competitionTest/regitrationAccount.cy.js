import registrationAccountObject
    from "../../support/pageObjectModel/pageObject/competition/registraionAccount/regitrationAccountObject";
import registrationAcct from "../../fixtures/competition/registrationAcctData/registrationAcct.json"
import {baseUrl_CA} from "../../../cypress.config";

describe('Check registration account follow', () => {
    let index = 0;
    let regisAcct;
    beforeEach(() => {
        //map data input for each test
        regisAcct = registrationAcct[index]
        index++;
    })
    it('input value into regitration account', () => {
        cy.log("áasdasdasdasdasdasdasd: ", regisAcct.AddressPostCode1)
        registrationAccountObject.registrationAccFunction(regisAcct)
    })

})