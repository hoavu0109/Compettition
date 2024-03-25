import awardInformationFrom from "../../locator/competition/awardInformationFrom";
class AwardInformationFromObject{
    awardInformation(){
        return cy.get(awardInformationFrom.awardInformation).eq(1)
    }
    awardCheckboxList(){
        return cy.get(awardInformationFrom.awardCheckboxList)
    }
    priceAwardList(){
        return cy.get(awardInformationFrom.priceAwardList).then((arrayPrice)=>{
            let totalPrice = 0;
            for (let i = 0; i <arrayPrice.length ; i++) {
                cy.log('phat tu thu i ',arrayPrice[i])
                // totalPrice = totalPrice+ parseFloat(arrayPrice[i].replace(/,/g,''))
            }


            return totalPrice;
        })
    }
    totalAmountValue(){
        return cy.get(awardInformationFrom.totalAmountValue).invoke('text').then((text)=>{
            // lay text thu nhat trong chuoi text cat bang dau cach va xoa dau phay tu chuoi
            let amountString = text.split(' ')[0].replace(/,/g, '');
            // chuyen text sang chu so
           return  parseFloat(amountString)
        })
    }
    totalAmountCurrency(){
        return cy.get(awardInformationFrom.totalAmountValue).invoke('text').then((text)=>{
            // lay text thu hai trong chuoi text cat bang dau cach
            let currencyString = text.split(' ')[1];
            return currencyString;
        })
    }
    submitBtn(){
        return cy.get(awardInformationFrom.submitBtn)
    }
}
const awardInformationFromObject = new AwardInformationFromObject();
export default awardInformationFromObject;