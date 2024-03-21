import loginAdminObject from "../../support/pageObjectModel/pageObject/admin/loginAdmin/loginAdminObject";
import accountLogin from "../../fixtures/admin/accountLogin.json"

describe('login Admin', () => {
    let accInfo;
    let index = 0;
    beforeEach(() => {
        cy.visit('http://admin.tcsa-local.site/')
        accInfo = accountLogin[index]
        index++
    })

    it.only('login Admin', () => {
        loginAdminObject.loginAdmin(accInfo.acct, accInfo.password)
    })

    it.only('login user', () => {
        loginAdminObject.loginAdmin(accInfo.acct, accInfo.password)
    })
})