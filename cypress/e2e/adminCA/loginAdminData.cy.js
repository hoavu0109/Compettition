import loginAdminObject from "../../support/pageObjectModel/pageObject/admin/loginAdmin/loginAdminObject";
import accountLogin from "../../fixtures/admin/accountLogin.json"

describe('login Admin', () => {
    beforeEach(() => {
        cy.visit('http://admin.tcsa-local.site/')
    })
    it.only('login Admin', ()=>{
        loginAdminObject.loginAdmin(accountLogin.acct,accountLogin.password)

    })
})