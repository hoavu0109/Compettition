import businessListTab from "../../../locator/admin/businessListTab";
import commonAdminObject from "../commonAdminObject";
class BusinessListObject{
    businessTab(){
        cy.get(businessListTab.businessTab).eq(1).click({force: true})
    }
    emailSearch(){
        return cy.get(businessListTab.emailSearch)
    }
    rowOfData(row_index){
        return cy.get(businessListTab.rowOfData).eq(row_index)
    }
    numberOfData(){
        return cy.get(businessListTab.rowOfData)
    }
    async IdData(row_index){
        let id;
        id = await businessListObject.rowOfData(row_index).find('td').eq(0).invoke('text')
        return id;

    }
    companyNameData(row_index){
        return businessListObject.rowOfData(row_index).find('td').eq(1).invoke('text')
    }
    contactPersonData(row_index){
        return businessListObject.rowOfData(row_index).find('td').eq(2).invoke('text')
    }
    emailData(row_index){
        return businessListObject.rowOfData(row_index).find('td').eq(3).invoke('text')
    }
    contactNumberData(row_index){
        return businessListObject.rowOfData(row_index).find('td').eq(4).invoke('text')
    }
    registrationStatusData(row_index){
        return businessListObject.rowOfData(row_index).find('td').eq(5).invoke('text')
    }
    joinTimeData(row_index){
        return businessListObject.rowOfData(row_index).find('td').eq(6).invoke('text')
    }
    editCompanyDataBtn(row_index){
        return businessListObject.rowOfData(row_index).find('td>div>button').eq(0).click()
    }
    changePasswordCompanyDataBtn(row_index){
        return businessListObject.rowOfData(row_index).find('td>div>button').eq(1).click()
    }

    //Edit Participated Company
    reviewStatusDroplist(){
        return cy.get(businessListTab.reviewStatusDroplist)
    }
    reviewStatusOptions(){
        return cy.get(businessListTab.reviewStatusOptions)
    }
    reviewStatus_Reviewing(){
        return businessListObject.reviewStatusOptions().eq(0)
    }
    reviewStatus_Approved(){
        return businessListObject.reviewStatusOptions().eq(1)
    }
    reviewStatus_Rejected(){
        return businessListObject.reviewStatusOptions().eq(2)
    }
    saveReviewBtn(){
        return cy.get(businessListTab.saveReviewBtn)
    }
    messageSuccessApprovedAcct(){
        return cy.get(businessListTab.messageSuccessApprovedAcct).should('be.visible')
    }

    //change password
    password(){
        return cy.get(businessListTab.password)
    }
    passwordConfirmation(){
        return cy.get(businessListTab.passwordConfirmation)
    }
    confirmChangePasswordBtn(){
        return cy.get(businessListTab.confirmChangePasswordBtn)
    }
    messageSuccessPassWordUpdate(){
        return cy.get(businessListTab.messageSuccessPassWordUpdate).should('be.visible')
    }
    searchFunction(search_value){
        cy.wait(500)
        businessListObject.emailSearch().type(search_value,{force: true} )
        commonAdminObject.searchBtn().click()
        cy.wait(1000)
    }
    // admin aproved registrion acct from company
    approvedRegistrationForm(){
        businessListObject.editCompanyDataBtn(0).click({force: true})
        cy.wait(1000)
        businessListObject.reviewStatusDroplist().click( {force: true})
        businessListObject.reviewStatus_Approved().click( {force: true})
        businessListObject.saveReviewBtn().click({force: true}).then(()=>{
            businessListObject.messageSuccessApprovedAcct()
        })
    }
    //reset password for the company have acct submit by admin
    resetPasswordCompany(Password_Reset){
        businessListObject.changePasswordCompanyDataBtn(0).click()
        businessListObject.password().type(Password_Reset)
        businessListObject.passwordConfirmation().type(Password_Reset)
        businessListObject.confirmChangePasswordBtn().click().then(()=>{
            businessListObject.messageSuccessPassWordUpdate()
        })
    }

}
const businessListObject = new BusinessListObject();
export  default businessListObject