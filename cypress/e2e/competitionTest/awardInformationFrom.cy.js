import awardInformationFromObject
    from "../../support/pageObjectModel/pageObject/competition/awardInformationFromObject";
import loginCAObject from "../../support/pageObjectModel/pageObject/competition/loginCAObject";

describe('Check Award Information Form', () => {
    beforeEach(() => {
        loginCAObject.loginCAFunction('64986595', '64986595')
    })
    it('check submit award information form', () => {
        // check price, submit award information form
        awardInformationFromObject.submitAwardInformationForm()
        //check currentcy
        awardInformationFromObject.totalAmountCurrency().then((currency) => {
            expect(currency).eq('NTD')
        })



    })
})