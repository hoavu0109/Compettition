import awardInformationFromObject
    from "../../support/pageObjectModel/pageObject/competition/awardInformationFromObject";
import loginCAObject from "../../support/pageObjectModel/pageObject/competition/loginCAObject";
import exportRegisAcctData from "../../fixtures/competition/registrationAcctData/exportRegisAcctData.json"
describe('Check Award Information Form', () => {
    beforeEach(() => {
        loginCAObject.loginCAFunction(exportRegisAcctData.corporateCode, exportRegisAcctData.corporateCode)
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