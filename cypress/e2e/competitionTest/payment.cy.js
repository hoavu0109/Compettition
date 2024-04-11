import loginCAObject from "../../support/pageObjectModel/pageObject/competition/loginCAObject";
import paymentObject from "../../support/pageObjectModel/pageObject/competition/paymentObject";
describe('Check Payment order',()=>{
    beforeEach(()=>{
        loginCAObject.loginCAFunction('63516157', '63516157')
    })
    it('Check create  payment order manual',()=>{
        paymentObject.createOrderPaymentManualForOneAward()

    })
})