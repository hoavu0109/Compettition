import loginAdminObject from "../../support/pageObjectModel/pageObject/admin/loginAdmin/loginAdminObject";
import accountLogin from '../../fixtures/admin/accountLogin.json'
import commonAdminObject from "../../support/pageObjectModel/pageObject/admin/commonAdminObject";
import companyEntryManagementObject
    from "../../support/pageObjectModel/pageObject/admin/companyEntryManagement/companyEntryManagementObject";

describe("Check Entry Company Management ", () => {
    beforeEach(() => {
        loginAdminObject.loginAdmin(accountLogin[0].acct, accountLogin[0].pas)
    })
    it('check Entry Company Management', () => {
        commonAdminObject.competitionArea().click({force: true})
        companyEntryManagementObject.companyEntryManagement().click()
        companyEntryManagementObject.queryAwardRegistrationStatus().click().then(() => {
            // companyEntryManagementObject.reviewingStatus().click()
        })
        commonAdminObject.searchBtn().click()
        companyEntryManagementObject.findId_EntryCompanyManagement('34552211')
        // approved registration award
        companyEntryManagementObject.registrationStatusDroplist().click({force: true})
        companyEntryManagementObject.registration_ApprovedStatus().click()
        // companyEntryManagementObject.saveEditStatusBtn().click({force:true})
    })
})