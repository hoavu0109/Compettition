import login from '../../../locator/admin/login.js'

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

    enterVerificationCode() {
        return cy.get(login.enterVerificationCode)
    }

    loginBtn() {
        return cy.get(login.loginBtn)
    }

    languageModeEng() {
        return cy.get(login.languageMode).eq(0)
    }

    languageModeTaiwan() {
        return cy.get(login.languageMode).eq(1)
    }

    getVerifyCode() {
        // updating ...
        return actualCode;
    }
}

const login = new LoginAdminObject();
export default login;