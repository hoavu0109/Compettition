import businessListTab from "../../../locator/admin/businessListTab";
class BusinessListObject{
    businessTab(){
        return cy.get(businessListTab.businessTab).eq(1)
    }
    emailSearch(){
        return cy.get(businessListTab.emailSearch)
    }
    searchBtn(){
        return cy.get(businessListTab.searchAndClearBtn).eq(0)
    }
    clearBtn(){
        return cy.get(businessListTab.searchAndClearBtn).eq(1)
    }
    rowOfData(row_index){
        return cy.get(businessListTab.rowOfData).eq(row_index)
    }
    async IdData(row_index){
        let id;
        id = await businessListObject.rowOfData(row_index).find('td').eq(0).invoke('text')
        return id.trim();

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
    searchFunction(search_value){
        businessListObject.emailSearch().type(search_value)
        businessListObject.searchBtn().click()
    }
}
const businessListObject = new BusinessListObject();
export  default businessListObject