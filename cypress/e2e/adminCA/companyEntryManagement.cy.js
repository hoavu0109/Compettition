import loginAdminObject from "../../support/pageObjectModel/pageObject/admin/loginAdmin/loginAdminObject";
import accountLogin from '../../fixtures/admin/accountLogin.json'
import commonAdminObject from "../../support/pageObjectModel/pageObject/admin/commonAdminObject";
import companyEntryManagementObject
    from "../../support/pageObjectModel/pageObject/admin/companyEntryManagement/companyEntryManagementObject";
describe ("Check Entry Company Management ",()=>{
    beforeEach(()=>{
        loginAdminObject.loginAdmin(accountLogin[0].acct,accountLogin[0].pas)
    })
    it('check Entry Company Management',()=>{
        commonAdminObject.competitionArea().click({force:true})
        companyEntryManagementObject.companyEntryManagement().click()
    })
})