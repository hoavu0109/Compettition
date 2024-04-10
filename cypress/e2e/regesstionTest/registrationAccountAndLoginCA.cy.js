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
    it('Registration acct -Fill all fields - Use new acct to login CA system', () => {

        // Step1: Fill registration acct form  at CA site
        registrationAccountObject.registrationAccFunction(regisAcct)

        //Step2: Admin submit acct regitrtion form
        registrationAccountObject.enterCorporateCode().invoke('val').then((corporateCode) => {
            registrationAccountObject.completeBtn().click().then(()=>{
                registrationAccountObject. messageSuccess()
            })
            // login Admin system -> go to Business list tab to find the record include email value
            loginAdminObject.loginAdmin(accInfo.acct, accInfo.pas)
            commonAdminObject.competitionArea().trigger('mouseover')
            businessListObject.businessTab().click({force: true})
            //search main email of the company registration
            businessListObject.searchFunction(corporateCode)
            // check that the result is only one data
            businessListObject.numberOfData().should('have.lengthOf',1)
            // admin approved registration acct from company
            businessListObject.approvedRegistrationForm(0)

            //reset password for the company have acct submit by admin
            // businessListObject.resetPasswordCompany('Admin123')

            // Step3: login again into CA
            loginCAObject.loginCAFunction(corporateCode,corporateCode)

            //submit award information form
            awardInformationFromObject.submitAwardInformationForm()
            // submit registration Information
            registrationInformationObject.registrationInformationSubmitFunction()
            // go to Admin to approve Awrad registration
            loginAdminObject.loginAdmin(accInfo.acct, accInfo.pas)
            companyEntryManagementObject.approvedRegistrationAward(corporateCode)

        })
    })

})