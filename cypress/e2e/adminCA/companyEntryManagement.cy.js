import loginAdminObject from "../../support/pageObjectModel/pageObject/admin/loginAdmin/loginAdminObject";
import accountLogin from '../../fixtures/admin/accountLogin.json'
import commonAdminObject from "../../support/pageObjectModel/pageObject/admin/commonAdminObject";
import companyEntryManagementObject
    from "../../support/pageObjectModel/pageObject/admin/companyEntryManagement/companyEntryManagementObject";
import businessListObject from "../../support/pageObjectModel/pageObject/admin/businessList/businessListObject";
describe("Check Entry Company Management ", () => {
    beforeEach(() => {
        loginAdminObject.loginAdmin(accountLogin[0].acct, accountLogin[0].pas)
    })
    it('check Entry Company Management', () => {
        // approved registration award
        companyEntryManagementObject.approvedRegistrationAward('15707611')
        // companyEntryManagementObject.findId_EntryCompanyManagement('90473743')

    })
})