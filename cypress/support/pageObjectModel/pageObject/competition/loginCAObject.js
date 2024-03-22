import loginCALocator from "../../locator/competition/loginCALocator";
class LoginCAObject {
    accountInput(){
        return cy.get(loginCALocator.accountInput)
    }
    passwordInput(){
        return cy.get(loginCALocator.passwordInput)
    }
    codeVerify(){
        return cy.get(loginCALocator.codeVerify)
    }
    enterVerificationCode(){
        return cy.get(loginCALocator.enterVerificationCode)
    }
    loginBtn(){
        return cy.get(loginCALocator.loginBtn)
    }
    signUpBtn(){
        return cy.get(loginCALocator.signUpBtn)
    }
}
const loginCAObject = new LoginCAObject();
export default loginCAObject;