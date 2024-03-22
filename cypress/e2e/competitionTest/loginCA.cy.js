import loginCAObject from "../../support/pageObjectModel/pageObject/competition/loginCAObject";

describe('login CA function',()=>{
    before(()=>{
        cy.visit('http://competition.tcsa-local.site/login')
    })
    it.only('login CA function ',()=>{
        loginCAObject.accountInput().type('88809912')
        loginCAObject.passwordInput().type('Admin123')
        loginCAObject.codeVerify().invoke('text').then((code)=>{
            loginCAObject.enterVerificationCode().type(code)
        })
        loginCAObject.loginBtn().click()
    })
})