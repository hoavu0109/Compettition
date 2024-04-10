import loginCALocator from "../../locator/competition/loginCALocator";
import {baseUrl_CA} from "../../../../../cypress.config";
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
    messageLoginCASuccess(){
        return cy.get(loginCALocator.messageLoginCASuccess).should('be.visible')
    }
    signUpBtn(){
        return cy.get(loginCALocator.signUpBtn)
    }
    loginCAFunction(Id_Company, password){
        cy.visit(baseUrl_CA)
        cy.viewport(1280, 720)
        cy.clearLocalStorage()
        // cy.getAllLocalStorage().should('be.empty')
        loginCAObject.accountInput().type(Id_Company)
        loginCAObject.passwordInput().type(password)
        loginCAObject.codeVerify().invoke('text').then((code)=>{
            loginCAObject.enterVerificationCode().type(code)
        })
        loginCAObject.loginBtn().click().then(()=>{
            loginCAObject.messageLoginCASuccess()
        })
    }
}
const loginCAObject = new LoginCAObject();
export default loginCAObject;