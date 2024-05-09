import loginCAObject from "../../support/pageObjectModel/pageObject/competition/loginCAObject";
import paymentObject from "../../support/pageObjectModel/pageObject/competition/paymentObject";
describe('Check Payment order',()=>{
    beforeEach(()=>{
        loginCAObject.loginCAFunction('68480691', 'Admin123')
    })
    it('Check create  payment order manual',()=>{
        paymentObject.createOrderPaymentManualForOneAward()

    })
})