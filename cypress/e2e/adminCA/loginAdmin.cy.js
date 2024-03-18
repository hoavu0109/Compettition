import loginAdminObject from "../../support/pageObjectModel/pageObject/admin/loginAdmin/loginAdminObject";

describe('login Admin', () => {
    beforeEach(() => {
        cy.visit('http://admin.tcsa-local.site/')
        const actualCode = loginAdminObject.getVerifyCode();
        loginAdminObject.languageModeEng().click()
        loginAdminObject.accountInput().type('hoa.vu')
        loginAdminObject.passwordInput().type('Admin123')
        loginAdminObject.codeVerify().click()
        loginAdminObject.enterVerificationCode().type(actualCode) // need to get the code
        loginAdminObject.loginBtn().click()
    })
})