import awardInformationFrom from "../../locator/competition/awardInformationFrom";

class AwardInformationFromObject {
    awardInformation() {
        return cy.get(awardInformationFrom.awardInformation).eq(1)
    }

    awardCheckboxList() {
        return cy.get(awardInformationFrom.awardCheckboxList)
    }

    priceAwardList() {
        return cy.get(awardInformationFrom.priceAwardList).then((arrayPrice) => {
            let totalPrice = 0;
            for (let i = 0; i < arrayPrice.length; i++) {
                cy.get(arrayPrice[i]).invoke('text').then((price) => {
                    totalPrice = totalPrice + parseFloat(price.replace(/,/g, ''))
                    if (i == arrayPrice.length - 1)
                        return totalPrice;
                })
            }
        })
    }

    totalAmountValue() {
        return cy.get(awardInformationFrom.totalAmountValue).invoke('text').then((text) => {
            // lay text thu nhat trong chuoi text cat bang dau cach va xoa dau phay tu chuoi
            let amountString = text.split(' ')[0].replace(/,/g, '');
            // chuyen text sang chu so
            return parseFloat(amountString)
        })
    }

    totalAmountCurrency() {
        return cy.get(awardInformationFrom.totalAmountValue).invoke('text').then((text) => {
            // lay text thu hai trong chuoi text cat bang dau cach
            let currencyString = text.split(' ')[1];
            return currencyString;
        })
    }

    submitBtn() {
        return cy.get(awardInformationFrom.submitBtn)
    }
    okConformBtn(){
        return cy.get(awardInformationFrom.okConformBtn)
    }
    messageSuccessRegistrationInformation(){
        return cy.get(awardInformationFrom.messageSuccessRegistrationInformation)
    }
    submitAwardInformationForm(){
        awardInformationFromObject.awardInformation().click()
        awardInformationFromObject.totalAmountValue().then((defaultAmount) => { // total amount field default value
            //check all checkbox award
            awardInformationFromObject.awardCheckboxList().click({multiple: true})
            awardInformationFromObject.priceAwardList().then((totalPrice) => { //check sum all price of award
                awardInformationFromObject.totalAmountValue().then((totalAmount) => {// Total amount field after select award list
                    expect(totalPrice + defaultAmount).eq(totalAmount)
                })
            })
        })
        // click submit award Information form
        awardInformationFromObject.submitBtn().click()
        awardInformationFromObject.okConformBtn().click().then(()=>{
            awardInformationFromObject.messageSuccessRegistrationInformation().should('be.visible')
        })
    }
}

const awardInformationFromObject = new AwardInformationFromObject();
export default awardInformationFromObject;