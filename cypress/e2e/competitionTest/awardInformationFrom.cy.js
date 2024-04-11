import awardInformationFromObject
    from "../../support/pageObjectModel/pageObject/competition/awardInformationFromObject";
import loginCAObject from "../../support/pageObjectModel/pageObject/competition/loginCAObject";

describe('Check Award Information Form', () => {
    beforeEach(() => {
        loginCAObject.loginCAFunction('92055559', '92055559')
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