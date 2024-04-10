import loginAdminObject from "../../support/pageObjectModel/pageObject/admin/loginAdmin/loginAdminObject";
import accountLogin from "../../fixtures/admin/accountLogin.json"
import businessListObject from "../../support/pageObjectModel/pageObject/admin/businessList/businessListObject";
import commonAdminObject from "../../support/pageObjectModel/pageObject/admin/commonAdminObject";
import loginCAObject from "../../support/pageObjectModel/pageObject/competition/loginCAObject";
import {baseUrl_Admin} from "../../../cypress.config";
describe('Check Business List', () => {
    beforeEach(() => {
        loginAdminObject.loginAdmin(accountLogin[0].acct, accountLogin[0].pas)
    })
    it.only('check display all data', () => {
        //verify data

        cy.wait(2000)
        commonAdminObject.competitionArea().then(()=>{
            businessListObject.businessTab().click({force: true})
        })


        //search data
        businessListObject.searchFunction('cuong.nguyenmanh+99@eastgate-software.com')

        // check that the result is only one data
        businessListObject.numberOfData().should('have.lengthOf',1)

        // admin aproved registrion acct from company
        businessListObject.approvedRegistrationForm()

        //reset password for the company have acct submit by admin
        businessListObject.resetPasswordCompany('Admin123')

    })
})
