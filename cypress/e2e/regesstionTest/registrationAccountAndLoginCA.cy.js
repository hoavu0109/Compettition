import registrationAccountObject
    from "../../support/pageObjectModel/pageObject/competition/registraionAccount/regitrationAccountObject";
import registrationAcct from "../../fixtures/competition/registrationAcctData/registrationAcct.json"
import loginAdminObject from "../../support/pageObjectModel/pageObject/admin/loginAdmin/loginAdminObject";
import accountLogin from "../../fixtures/admin/accountLogin.json"
import businessListObject from "../../support/pageObjectModel/pageObject/admin/businessList/businessListObject";
import commonAdminObject from "../../support/pageObjectModel/pageObject/admin/commonAdminObject";
import loginCAObject from "../../support/pageObjectModel/pageObject/competition/loginCAObject";
import {baseUrl_CA} from "../../../cypress.config";
import awardInformationFromObject
    from "../../support/pageObjectModel/pageObject/competition/awardInformationFromObject";
import registrationInformationObject
    from "../../support/pageObjectModel/pageObject/competition/registrationInformationObject";
import companyEntryManagementObject
    from "../../support/pageObjectModel/pageObject/admin/companyEntryManagement/companyEntryManagementObject";
import documentUploadObject from "../../support/pageObjectModel/pageObject/competition/documentUploadObject";
import paymentObject from "../../support/pageObjectModel/pageObject/competition/paymentObject";
describe('Check registration account follow', () => {
    let index = 0;
    let regisAcct;
    let accInfo;
    beforeEach(() => {
        //map data input for each test
        regisAcct = registrationAcct[index]
        accInfo = accountLogin[index]
        index++;
    })
    it('Full follow : registration acct - Registration Award, document,.. - payment', () => {

        // Step1: Fill registration acct form  at CA site
        registrationAccountObject.registrationAccFunction(regisAcct)

        //Step2: Admin submit acct registration form
        registrationAccountObject.enterCorporateCode().invoke('val').then((corporateCode) => {
            registrationAccountObject.completeBtn().click().then(()=>{
                registrationAccountObject. messageSuccess()
            })
            // login Admin system -> go to Business list tab to find the record include email value
            loginAdminObject.loginAdmin(accInfo.acct, accInfo.pas)
            commonAdminObject.competitionArea().then(()=>{
                commonAdminObject.awarDataManagement()
                businessListObject.businessTab()
            })
            //search main email of the company registration and result is only one data
            businessListObject.searchFunction(corporateCode)
            businessListObject.numberOfData().should('have.lengthOf',1)
            // admin approved registration acct from company
            businessListObject.approvedRegistrationForm()
            // Step3: login again into CA => submit award information form & registration Information
            loginCAObject.loginCAFunction(corporateCode,corporateCode)
            awardInformationFromObject.submitAwardInformationForm()
            registrationInformationObject.registrationInformationSubmitFunction()
            // Step 4: go to Admin to approve Award registration
            loginAdminObject.loginAdmin(accInfo.acct, accInfo.pas)
            companyEntryManagementObject.approvedRegistrationAward(corporateCode)
            // Step 5: login CA => submit document upload
            loginCAObject.loginCAFunction(corporateCode,corporateCode)
            documentUploadObject.documentUploadFunction()
            // Step 6: go to Admin to approve document upload
            loginAdminObject.loginAdmin(accInfo.acct, accInfo.pas)
            companyEntryManagementObject.approvedRegistrationAward(corporateCode)

            // step 7: login CA to create payment order
            loginCAObject.loginCAFunction(corporateCode,corporateCode)
            paymentObject.createOrderPaymentManualForOneAward()

            // Step 8: go to Admin to to approve payment order
            loginAdminObject.loginAdmin(accInfo.acct, accInfo.pas)
            companyEntryManagementObject.approvedRegistrationAward(corporateCode)
            cy.get('#rc-tabs-0-tab-paymentTitle').click()

        })
    })

})