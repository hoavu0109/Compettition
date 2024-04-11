import payment from "../../locator/competition/payment";
const paymentFileData = "../fixtures/competition/paymentData/paymentFileValidData.pdf"
class PaymentObject {
    paymentTab(){
        return cy.get(payment.paymentTab).eq(4).click()
    }
    paymentDetailScreen(){
        return cy.get(payment.paymentDetailScreen).should('be.visible')
    }
    addPaymentBtn(){
        return cy.get(payment.addPaymentBtn).eq(1).click()
    }
    allAwardCheckBox(){
        return cy.get(payment.allAwardCheckBox)
    }
    awardEnableCheckbox(){
        return cy.xpath(payment.awardEnableCheckbox)
    }
    paymentMethodDroplist(){
        return cy.get(payment.paymentMethodDroplist).click()
    }
    uploadRemittanceMethodOption(){
        return cy.get(payment.uploadRemittanceMethodOption).eq(0).click()
    }
    onlinePaymentMethodOption(){
        return cy.get(payment.onlinePaymentMethodOption).click()
    }
    uniformNumbers(){
        return cy.get(payment.uniformNumbers).type('uniformNumbers 1122')
    }
    inputPaymentFile(){
        return cy.get(payment.inputPaymentFile)
    }
    uploadPaymentFileBtn(){
        return cy.get(payment.uploadPaymentFileBtn).click()
    }
    waitUploadFileSuccess(){
        return cy.get(payment.waitUploadFileSuccess).should('be.visible')
    }
    submitAddPaymentRequest(){
        return cy.get(payment.submitAddPaymentRequest).click()
    }
    cancelAddPaymentRequest(){
        return cy.get(payment.cancelAddPaymentRequest).eq(2).click()
    }
    messageSuccessAddPaymentOrder(){
        return cy.get(payment.messageSuccessAddPaymentOrder).should('be.visible')
    }
    createOrderPaymentManualForOneAward(){
        paymentObject.paymentTab()
        paymentObject.addPaymentBtn().then(()=>{
            paymentObject.paymentDetailScreen()
        })
        paymentObject.awardEnableCheckbox().eq(0).click()
        paymentObject.paymentMethodDroplist()
        paymentObject.uploadRemittanceMethodOption()
        paymentObject.uniformNumbers()
        paymentObject.uploadPaymentFileBtn().then(()=>{
            const inputPaymentFile = paymentObject.inputPaymentFile();
            inputPaymentFile.attachFile(paymentFileData)
            cy.wait(1000)
            paymentObject.waitUploadFileSuccess()
        })
        paymentObject.submitAddPaymentRequest().then(()=>{
            paymentObject.messageSuccessAddPaymentOrder()
        })
    }


}
const paymentObject = new PaymentObject();
export default paymentObject;