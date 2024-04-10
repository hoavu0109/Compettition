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
    messageSuccessLogin(){
        return cy.get(login.messageSuccessLogin).should('be.visible')
    }
    loginAdmin(acct, password) {
        cy.visit(baseUrl_Admin)
        cy.viewport(1280, 720)
        cy.wait(500)
        loginAdminObject.languageModeEng().click()
        loginAdminObject.accountInput().type(acct)
        loginAdminObject.passwordInput().type(password)
        loginAdminObject.codeVerify().click()
        loginAdminObject.getVerifyCode().invoke('text').then((text) => {
            loginAdminObject.enterVerificationCode().type(text)
        })
        loginAdminObject.loginBtn().click().then(()=>{
            loginAdminObject.messageSuccessLogin().then(()=>{
                cy.get('.ant-notification-notice-close-x').click()
            })
        })


    }
}

const loginAdminObject = new LoginAdminObject();
export default loginAdminObject;