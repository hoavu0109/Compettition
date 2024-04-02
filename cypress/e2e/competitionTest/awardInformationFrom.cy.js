import awardInformationFromObject
    from "../../support/pageObjectModel/pageObject/competition/awardInformationFromObject";
import loginCAObject from "../../support/pageObjectModel/pageObject/competition/loginCAObject";
describe('Check Award Information Form',()=>{
    beforeEach(()=>{
        loginCAObject.loginCAFunction('68182157','Admin123')
    })
    it('check submit award information form',()=>{
        awardInformationFromObject.awardInformation().click()
        // check total amount default
        awardInformationFromObject.totalAmountValue().then((defaultAmount)=>{
            cy.log('defaultAmount',defaultAmount)

        })
        //check all checkbox award
        awardInformationFromObject.awardCheckboxList().click({ multiple: true })

        awardInformationFromObject.priceAwardList().then((totalPrice)=>{
            cy.log('totalPrice',totalPrice) //.... checking
        })
        // // check total amount after select award list
        // awardInformationFromObject.totalAmountValue().then((totalAmount)=>{
        //     cy.log('amounttttt',totalAmount)
        // })
        // //check currentcy
        // awardInformationFromObject.totalAmountCurrency().then((currency)=>{
        //     expect(currency).eq('NTD')
        // })


    })
})