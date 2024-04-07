import login from '../../../locator/admin/login.js'
import {baseUrl_Admin} from "../../../../../../cypress.config";

class LoginAdminObject {
    accountInput() {
        return cy.get(login.accountInput)
    }

    passwordInput() {
        return cy.get(login.passwordInput)
    }

    codeVerify() {
        return cy.get(login.codeVerify)
    }

    loginBtn() {
        return cy.get(login.loginBtn)
    }

    languageModeEng() {
        return cy.get(login.languageModeEng)
    }

    languageModeTaiwan() {
        return cy.get(login.languageModeTaiwan)
    }

    getVerifyCode() {
        return  cy.get(login.getVerifyCode)

    }
    enterVerificationCode() {
        return cy.get(login.enterVerificationCode)
    }
    loginAdmin(acct, password) {
        cy.visit(baseUrl_Admin)
        cy.wait(2000)
        loginAdminObject.languageModeEng().click()
        loginAdminObject.accountInput().type(acct)
        loginAdminObject.passwordInput().type(password)
        loginAdminObject.codeVerify().click()
        loginAdminObject.getVerifyCode().invoke('text').then((text) => {
            loginAdminObject.enterVerificationCode().type(text)
        })
        loginAdminObject.loginBtn().click()
    }
}

const loginAdminObject = new LoginAdminObject();
export default loginAdminObject;