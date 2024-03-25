import awardInformationFromObject
    from "../../support/pageObjectModel/pageObject/competition/awardInformationFromObject";
import loginCAObject from "../../support/pageObjectModel/pageObject/competition/loginCAObject";
describe('Check Award Information Form',()=>{
    beforeEach(()=>{
        loginCAObject.loginCAFunction('12312322','Admin123')
    })
    it('check submit award information form',()=>{
        awardInformationFromObject.awardInformation().click()
        // check total amount default
        awardInformationFromObject.totalAmountValue().then((amount)=>{
            expect(amount).eq(21000)
        })
        awardInformationFromObject.awardCheckboxList().click({ multiple: true })
        awardInformationFromObject.priceAwardList().then((totalPrice)=>{
            cy.log('totalPrice',totalPrice) //.... checking
        })
        // check total amount after select award list
        awardInformationFromObject.totalAmountValue().then((amount)=>{
            cy.log('amounttttt',amount)
        })
        awardInformationFromObject.totalAmountCurrency().then((currency)=>{
            cy.log('currencyyy',currency)
        })


    })
})